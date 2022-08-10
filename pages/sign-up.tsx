import { NextPage } from 'next';
import React  from "react";
import Link from "next/link";
import BasicInput from "../components/BasicInput";
import BasicButton from "../components/BasicButton";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";
import { useSignUpService } from "../services/user/useSignUp/useSignUp.service";

const SignUp: NextPage = () => {
  const [signUpPayload, setSignUpPayload] = React.useState({
    email: '', username: '', password: '', passwordRepeat: ''
  });
  const { signUp, loading, error } = useSignUpService();

  const handleSignUp = async () => {
    await signUp(signUpPayload);
  };

  return (
    <>
      {loading ? <Loader/> : null}
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <Link href={'/'}>
              <img
                className='mx-auto h-12 w-auto hover:cursor-pointer'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt='Workflow'
              />
            </Link>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>New one? Welcome!</h2>
          </div>

          <div className='rounded-md shadow-sm -space-y-px'>
            <BasicInput
              type='email'
              placeholder='Email address'
              value={signUpPayload.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignUpPayload({ ...signUpPayload, email: e.target.value })}
              className={'w-full rounded-t-md'}
            />
            <BasicInput
              type='text'
              placeholder='Username'
              value={signUpPayload.username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignUpPayload({ ...signUpPayload, username: e.target.value })}
              className={'w-full'}
            />
            <BasicInput
              type='password'
              placeholder='Password'
              value={signUpPayload.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignUpPayload({ ...signUpPayload, password: e.target.value })}
              className={'w-full'}
            />
            <BasicInput
              type='password'
              placeholder='Password repeat'
              value={signUpPayload.passwordRepeat}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignUpPayload({ ...signUpPayload, passwordRepeat: e.target.value })}
              className={'w-full rounded-b-md'}
            />
          </div>

          {error.message ? (<ErrorBox error={error.message} />) : null}

          <BasicButton
            onClick={() => handleSignUp()}
          >
            Sign up
          </BasicButton>
        </div>
      </div>
    </>
  );
};

export default SignUp;
