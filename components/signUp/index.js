import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { User } from '@supabase/supabase-js';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { updateUserName } from 'utils/supabase-client';
import { AiFillLock } from 'react-icons/ai';

const SignUp = ({ setToggle }) => {
  const supabaseClient = useSupabaseClient();
  const [newUser, setNewUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: '',
    content: ''
  });
  const router = useRouter();
  const user = useUser();

  const handleSignup = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});
    const {
      error,
      data: { user: createdUser }
    } = await supabaseClient.auth.signUp({
      email,
      password
    });
    if (error) {
      setMessage({ type: 'error', content: error.message });
    } else {
      if (createdUser) {
        setMessage({
          type: 'note',
          content: 'Check your email for the confirmation link.'
        });
        await updateUserName(createdUser, name);
        setNewUser(createdUser);
      }
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   if (newUser || user) {
  //     router.replace('/account');
  //   }
  // }, [newUser, user]);

  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col max-w-lg p-3 w-80 ">
        <div className="flex flex-col items-center justify-center pb-12 ">
          <AiFillLock size={70} />
          Admin / Sign Up
        </div>
        <form onSubmit={handleSignup} className="flex flex-col space-y-4">
          {message.content && (
            <div
              className={`${
                message.type === 'error' ? 'text-pink-500' : 'text-green-500'
              } border ${
                message.type === 'error'
                  ? 'border-pink-500'
                  : 'border-green-500'
              } p-3`}
            >
              {message.content}
            </div>
          )}
          <Input placeholder="Name" onChange={setName} />
          <Input
            type="email"
            placeholder="Email"
            onChange={setEmail}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={setPassword}
          />
          <div className="pt-2 w-full flex flex-col">
            <Button
              variant="slim"
              type="submit"
              loading={loading}
              disabled={loading || !email.length || !password.length}
            >
              Sign up
            </Button>
          </div>

          <span className="pt-1 text-center text-sm">
            <span className="text-zinc-200">Do you have an account?</span>
            {` `}
            <p
              onClick={() => {
                setToggle('signin');
              }}
              className="text-accent-9 font-bold hover:underline cursor-pointer"
            >
              Sign in.
            </p>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
