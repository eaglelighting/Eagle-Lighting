import { useState } from "react";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";
import { User } from '@supabase/supabase-js';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';

const Admin = () => {
  const [toggle, setToggle] = useState("signin");
  const user = useUser();
  console.log(user)
  if(toggle === 'signin' && !user) {
    return (
      <SignIn setToggle={setToggle} />
    )
  }
  if(toggle === 'signup' && !user) {
    return (
      <SignUp setToggle={setToggle} />
    )
  }
  if (user) {
    return (
      <div>you are logged in</div>
    )
  }
};

export default Admin;
