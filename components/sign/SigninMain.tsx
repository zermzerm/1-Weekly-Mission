import styled from 'styled-components';
import Input from '../Input';
import { useState, KeyboardEvent } from 'react';
import axios from '@/pages/api/axios';
import { useRouter } from 'next/router';
import SignButton from '../Button';

export default function SigninMain() {
  const router = useRouter();
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [signError, setSignError] = useState(0);
  const [passwordCheck, setPasswordCheck] = useState('');
  const [emailErrorStatus, setEmailErrorStatus] = useState(1);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSignError(0);
    const res: any = await axios.post('/sign-in', {
      email: signinEmail,
      password: signinPassword,
    });
    if (res !== 400) {
      const signinData = res.data.data;
      setSignError(0);
      localStorage.setItem('token', signinData.accessToken);
      router.push('/folder');
    } else {
      setSignError(res);
    }
  }

  const handleOnKeyPress = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} onKeyDown={handleOnKeyPress}>
        <SigninMainWrapper>
          <InputContainer>
            <InputDiv>이메일</InputDiv>
            <Input
              inputType={'email'}
              emailChange={setSigninEmail}
              passwordChange={setSigninPassword}
              signError={signError}
              setPasswordCheck={setPasswordCheck}
              passwordCheck={passwordCheck}
              emailErrorStatus={emailErrorStatus}
              setEmailErrorStatus={setEmailErrorStatus}
              pwErrorStatus={emailErrorStatus}
              setPwErrorStatus={setEmailErrorStatus}
            />
          </InputContainer>
          <InputContainer>
            <InputDiv>비밀번호</InputDiv>
            <Input
              inputType={'password'}
              emailChange={setSigninEmail}
              passwordChange={setSigninPassword}
              signError={signError}
              setPasswordCheck={setPasswordCheck}
              passwordCheck={passwordCheck}
              emailErrorStatus={emailErrorStatus}
              setEmailErrorStatus={setEmailErrorStatus}
              pwErrorStatus={emailErrorStatus}
              setPwErrorStatus={setEmailErrorStatus}
            />
          </InputContainer>
        </SigninMainWrapper>
        <SignButton
          check={0}
          text={router.pathname.includes('signin') ? '로그인' : '회원가입'}
        />
      </form>
    </>
  );
}

const SigninMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InputDiv = styled.div`
  font-size: 14px;
`;

const EmailButton = styled.div`
  width: 100%;
  margin-top: 30px;
  font-size: 18px;
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  padding: 16px 20px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
  text-align: center;
`;
