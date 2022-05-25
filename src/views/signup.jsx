import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Banner from '../components/banner';
import Button from '../components/button';
import LoginBox from '../components/loginBox';
import TextField from '../components/textField';
import TextHeading from '../components/textHeading';
import SendIcon from '../assets/images/sendBtn.png';
import { isEmail, isEmpty, isValidField } from '../utils/validator';
import { signUp } from '../store/actions/auth';

function Signup() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const [formData, setFormdata] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    name: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit ', formData);
    const validEmail = isEmail(formData.email);

    if (
      isEmpty(formData.username) ||
      isEmpty(formData.password) ||
      isEmpty(formData.confirmPassword) ||
      isEmpty(formData.email) ||
      isEmpty(formData.name)
    ) {
      setError('Please fill all the fields');
    } else if (validEmail === false) {
      setError('Invalid Email');
    } else if (formData.password !== formData.confirmPassword) {
      setError('Password does not match');
    } else {
      setError('');
      let body={
        name: formData.name,
        email: formData.email,
        username: formData.username,
        password: formData.password
      }
      dispatch(signUp(body))
    }
  };

  useEffect(() => {
    if(authState.error){
      setError(authState.error)
    }
  }, [authState])

  if(authState.isAuthenticated){
    window.location.href = '/'
  }

  return (
    <LoginBox>
      <Banner text={'Gain Impact Chat'} color={'#52585D'} />
      <TextHeading text={'Sign Up'} />
      <TextField
        type={'text'}
        name='name'
        placeholder={'Enter your name'}
        onChange={handleChange}
      />
      <TextField
        type={'text'}
        name='username'
        placeholder={'Enter your username'}
        onChange={handleChange}
      />
      <TextField
        type={'text'}
        name='email'
        placeholder={'Enter your email'}
        onChange={handleChange}
      />
      <TextField
        type={'password'}
        name='password'
        placeholder={'Enter your password'}
        onChange={handleChange}
      />
      <TextField
        type={'password'}
        name='confirmPassword'
        placeholder={'Confirm password'}
        onChange={handleChange}
      />
      <Button text={authState.loading ? "Signing up user..." : 'Submit'}  icon={SendIcon} onClick={(e)=> authState.loading ? null : handleSubmit(e)}  />
      {error && (
        <p style={{ color: 'red', fontSize: "14px" }}>{error}</p>
      )}

    </LoginBox>
  );
}

export default Signup;
