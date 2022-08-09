import { NextPage } from 'next';
import BasicButton from '../components/BasicButton';
import BasicInput from '../components/BasicInput';
import Link from 'next/link';

const SignIn: NextPage = () => {
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
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Welcome back!</h2>
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
              className={'w-full rounded-b-md'}
            />
          </div>

          <div className='flex items-center justify-between'>
            <Link href={'/forgot-password'}>
              <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                Forgot your password?
              </a>
            </Link>
          </div>

          <BasicButton>
            Sign in
          </BasicButton>
        </div>
      </div>
    </>
  )
}

export default SignIn;
