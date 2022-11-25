import { useState } from "react";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";

const Admin = () => {
  const [toggle, setToggle] = useState("signin");
  if(toggle === 'signin') {
    return (
      <SignIn setToggle={setToggle} />
    )
  }
  if(toggle === 'signup') {
    return (
      <SignUp setToggle={setToggle} />
    )
  }
};

export default Admin;
