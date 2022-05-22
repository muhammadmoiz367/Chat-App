import React from 'react';

import Banner from '../components/banner';
import Button from '../components/button';
import LoginBox from '../components/loginBox';
import TextField from '../components/textField';
import TextHeading from '../components/textHeading';
import SendIcon from "../assets/images/sendBtn.png";

function Signup() {
  return (
    <LoginBox>
      <Banner text={'Gain Impact Chat'} color={'#52585D'} />
      <TextHeading text={"Sign Up"} />
      <TextField type={"text"} placeholder={"Enter your name"} />
      <TextField type={"text"} placeholder={"Enter your username"} />
      <TextField type={"text"} placeholder={"Enter your email"} />
      <TextField type={"password"} placeholder={"Enter your password"} />
      <TextField type={"password"} placeholder={"Confirm password"} />
      <Button text={"Submit"} icon={SendIcon} />
    </LoginBox>
  );
}

export default Signup;
