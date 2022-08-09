import { NextPage } from 'next';
import React  from "react";
import Link from "next/link";
import BasicInput from "../components/BasicInput";
import BasicButton from "../components/BasicButton";
import { useSignUpService } from "../services/user/useSignUp.service";

const SignUp: NextPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordRepeat, setPasswordRepeat] = React.useState('');

  const { signUp, loading } = useSignUpService();

  const handleSignUp = async () => {

  };

  return (
    <>
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
              autoComplete='email'
              placeholder='Email address'
              className={'w-full rounded-t-md'}
            />
            <BasicInput
              type='password'
              autoComplete='current-password'
              placeholder='Password'
              className={'w-full'}
            />
            <BasicInput
              type='password'
              autoComplete='current-password'
              placeholder='Password repeat'
              className={'w-full rounded-b-md'}
            />
          </div>

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
