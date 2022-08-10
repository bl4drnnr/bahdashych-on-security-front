import { NextPage } from 'next';
import React from "react";
import Link from 'next/link';
import BasicButton from '../components/BasicButton';
import BasicInput from '../components/BasicInput';
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";
import { useSignInService } from "../services/user/useSignIn/useSignIn.service";

const SignIn: NextPage = () => {
  const [signInPayload, setSignInPayload] = React.useState({ email: '', password: '' })

  const { signIn, loading, error } = useSignInService();

  const handleSignIn = async () => {
    await signIn(signInPayload);
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
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Welcome back!</h2>
          </div>

          <div className='rounded-md shadow-sm -space-y-px'>
            <BasicInput
              type='email'
              autoComplete='email'
              placeholder='Email address'
              value={signInPayload.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignInPayload({ ...signInPayload, email: e.target.value })}
              className={'w-full rounded-t-md'}
            />
            <BasicInput
              type='password'
              autoComplete='current-password'
              placeholder='Password'
              value={signInPayload.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSignInPayload({ ...signInPayload, password: e.target.value })}
              className={'w-full rounded-b-md'}
            />
          </div>

          {error.message ? (<ErrorBox error={error.message} />) : null}

          <BasicButton
            onClick={() => handleSignIn()}
          >
            Sign in
          </BasicButton>
        </div>
      </div>
    </>
  )
}

export default SignIn;
