import React from 'react';

import Banner from '../components/banner';
import Button from '../components/button';
import LoginBox from '../components/loginBox';
import TextField from '../components/textField';
import TextHeading from '../components/textHeading';
import SendIcon from "../assets/images/sendBtn.png";

function Login() {
  return (
    <LoginBox>
      <Banner text={'Gain Impact Chat'} color={'#52585D'} />
      <TextHeading text={"Sign In"} />
      <TextField type={"text"} placeholder={"Enter your username"} />
      <TextField type={"password"} placeholder={"Enter your password"} />
      <Button text={"Submit"} icon={SendIcon} />
    </LoginBox>
  );
}

export default Login;
