import Link from 'next/link';
import React from "react";
import BasicInput from './BasicInput.component';
import BasicButton from "./BasicButton.component";
import Loader from "./Loader.component";
import { useLogoutService } from "../services/user/useLogout.service";
import { useRouter } from "next/router";
import { useRefreshTokenService } from "../services/auth/useRefreshToken.service";

const Header = () => {
  const [accessToken, setAccessToken] = React.useState<string | null>('')
  const [search, setSearch] = React.useState('')

  const router = useRouter()
  const { refreshToken } = useRefreshTokenService()

  const { logout, loading, error } = useLogoutService()

  const handleLogout = async () => {
    const data = await logout(sessionStorage.getItem('_at'))
    if (data === 1) {
      sessionStorage.removeItem('_at')
      setAccessToken('')
    }
  }

  const handleRefreshToken = async () => {
    return await refreshToken();
  }

  React.useEffect(() => {
    if (sessionStorage.getItem('_at')) {
      handleRefreshToken().then((res) => {
        if (res) {
          sessionStorage.setItem('_at', res)
          setAccessToken(res)
        }
      })
    }
  }, [])

  return (
    <>
      {loading ? <Loader/> : null}
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <span className='sr-only'>Workflow</span>
            <img
              className='h-8 w-auto sm:h-10 cursor-pointer'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt=''
              onClick={() => {return router.push('/')}}
            />
          </div>

          <BasicInput
            type='text'
            placeholder='Search...'
            className={'w-1/5 rounded-lg'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value)
            }}
            value={search}
          />

          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          {!accessToken ? (
            <>
              <Link href={"/sign-in"}>
                <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                  Sign in
                </a>
              </Link>
              <Link href={"/sign-up"}>
                <a
                  className="ml-8 hover:cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Sign up
                </a>
              </Link>
            </>
          ) : (
            <BasicButton
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-600 w-20"
            >
              Logout
            </BasicButton>
          )}
          </div>

        </div>
      </div>
    </>
  )
}

export default Header;
