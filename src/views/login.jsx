import React, { useEffect, useState } from 'react';

import Banner from '../components/banner';
import Button from '../components/button';
import LoginBox from '../components/loginBox';
import TextField from '../components/textField';
import TextHeading from '../components/textHeading';
import SendIcon from '../assets/images/sendBtn.png';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../store/actions/auth';
import { isEmpty } from '../utils/validator';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (isEmpty(formData.username) || isEmpty(formData.password)) {
      setError('Please fill all the fields');
    } else {
      setError('');
      dispatch(signIn(formData));
    }
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if(authState.error){
      setError(authState.error)
    }
  }, [authState])

  if(authState.isAuthenticated){
    window.location.href = '/';
  }


  return (
    <LoginBox>
      <Banner text={'Gain Impact Chat'} color={'#52585D'} />
      <TextHeading text={'Sign In'} />
      <TextField
        type={'text'}
        placeholder={'Enter your username'}
        name='username'
        onChange={handleChange}
      />
      <TextField
        type={'password'}
        name='password'
        placeholder={'Enter your password'}
        onChange={handleChange}
      />
      <Button text={'Submit'} icon={SendIcon} onClick={handleLogin} />
      {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
    </LoginBox>
  );
}

export default Login;
