import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState, FormEvent } from 'react';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

import Button from 'components/ui/Button';
import GitHub from 'components/icons/GitHub';
import Input from 'components/ui/Input';
import LoadingDots from 'components/ui/LoadingDots';
import { Provider } from '@supabase/supabase-js';
import { getURL } from '@/utils/helpers';
import { AiFillLock } from 'react-icons/ai'

const SignIn = ({setToggle}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    type: '',
    content: ''
  });
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();
  const handleSignin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});

    let error;
    if (!password) {
      const res = await supabaseClient.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: getURL() }
      });
      error = res.error;
    } else {
      const res = await supabaseClient.auth.signInWithPassword({
        email,
        password
      });
      error = res.error;
    }
    if (error) {
      setMessage({ type: 'error', content: error.message });
    }
    if (!password) {
      setMessage({
        type: 'note',
        content: 'Check your email for the magic link.'
      });
    }
    setLoading(false);
  };

  // const handleOAuthSignIn = async (provider) => {
  //   setLoading(true);
  //   const { error } = await supabaseClient.auth.signInWithOAuth({
  //     provider,
  //     options: { redirectTo: getURL() }
  //   });
  //   if (error) {
  //     setMessage({ type: 'error', content: error.message });
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   if (user) {
  //     router.replace('/account');
  //   }
  // }, [user]);
    return (
        <div className="flex bg-black justify-center height-screen-helper">
        <div className="flex flex-col max-w-lg p-3 w-80 ">
          <div className="flex flex-col items-center justify-center pb-12 ">
            <AiFillLock size={70} />
            Admin / Sign In
          </div>
          <div className="flex flex-col space-y-4">
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

            {!showPasswordInput && (
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  required
                />
                <Button
                  variant="slim"
                  type="submit"
                  loading={loading}
                  disabled={!email.length}
                >
                  Send magic link
                </Button>
              </form>
            )}

            {showPasswordInput && (
              <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={setEmail}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={setPassword}
                  required
                />
                <Button
                  className="mt-1"
                  variant="slim"
                  type="submit"
                  loading={loading}
                  disabled={!password.length || !email.length}
                >
                  Sign in
                </Button>
              </form>
            )}

            <span className="pt-1 text-center text-sm">
              <a
                href="#"
                className="text-zinc-200 text-accent-9 hover:underline cursor-pointer"
                onClick={() => {
                  if (showPasswordInput) setPassword('');
                  setShowPasswordInput(!showPasswordInput);
                  setMessage({});
                }}
              >
                {`Or sign in with ${
                  showPasswordInput ? 'magic link' : 'password'
                }.`}
              </a>
            </span>

            <span className="pt-1 text-center text-sm">
              <span className="text-zinc-200">Don't have an account?</span>
              {` `}
                <p onClick={()=>{setToggle('signup')}} className="text-accent-9 font-bold hover:underline cursor-pointer">
                  Sign up.
                </p>
            </span>
          </div>

          {/* <div className="flex items-center my-6">
            <div
              className="border-t border-zinc-600 flex-grow mr-3"
              aria-hidden="true"
            ></div>
            <div className="text-zinc-400">Or</div>
            <div
              className="border-t border-zinc-600 flex-grow ml-3"
              aria-hidden="true"
            ></div>
          </div>

          <Button
            variant="slim"
            type="submit"
            disabled={loading}
            onClick={() => handleOAuthSignIn('github')}
          >
            <GitHub />
            <span className="ml-2">Continue with GitHub</span>
          </Button> */}
        </div>
      </div>
    )
};

export default SignIn;