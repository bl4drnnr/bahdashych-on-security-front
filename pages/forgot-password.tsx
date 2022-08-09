import React from 'react';
import Link from "next/link";
import BasicInput from "../components/BasicInput";
import BasicButton from "../components/BasicButton";

const ForgotPassword = () => {
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
            <h2 className='mt-6 text-center text-2xl font-extrabold text-gray-900'>Forgot password? Not a big deal!</h2>
          </div>

          <div className='rounded-md shadow-sm -space-y-px'>
            <BasicInput
              type='email'
              autoComplete='email'
              placeholder='Email address'
              className={'w-full rounded-lg'}
            />
          </div>

          <BasicButton>
            Restore email
          </BasicButton>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
