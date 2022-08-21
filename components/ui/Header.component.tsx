import Link from 'next/link';
import React from "react";
import BasicButton from "./BasicButton.component";
import Loader from "./Loader.component";
import { useLogoutService } from "../../services/user/useLogout.service";
import { useRouter } from "next/router";
import { useRefreshTokenService } from "../../services/auth/useRefreshToken.service";
import { parseJwt } from "../../utils/verify-token.util";
import { IToken } from "../../dto/token.interface";

const Header = () => {
  const [loggedData, setLoggedData] = React.useState<IToken>({
    roles: [], type: '', userId: '', username: ''
  })

  const router = useRouter()

  const { refreshToken, loading, error } = useRefreshTokenService()
  const { logout, logoutLoading } = useLogoutService()

  const handleRedirect = (path: string) => {
    return router.push(path)
  }

  const handleLogout = async () => {
    await logout(sessionStorage.getItem('_at'))
    sessionStorage.removeItem('_at')
    await router.push('/')
  }

  const handleRefreshToken = async () => {
    if (!sessionStorage.getItem('_at')) return;

    await refreshToken();
    if (error.message.length) sessionStorage.removeItem('_at')
    else setLoggedData(parseJwt(sessionStorage.getItem('_at') as string))
  }

  React.useEffect(() => {
    handleRefreshToken().then()
  }, [])

  return (
    <>
      {loading || logoutLoading ? <Loader/> : null}
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <span className='sr-only'>Workflow</span>
            <img
              className='h-8 w-auto sm:h-10 cursor-pointer'
              src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
              alt=''
              onClick={() => handleRedirect('/')}
            />
          </div>

          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          {loggedData.roles.find((role) => role.value === 'ADMIN') ? (
            <BasicButton
              onClick={() => handleRedirect('/admin')}
              className="bg-green-600 hover:bg-green-700 w-20 mr-5"
            >
              Admin
            </BasicButton>
          ) : null}
          {!loggedData.userId ? (
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
              onClick={() => handleLogout()}
              className="bg-red-600 hover:bg-red-900 w-20"
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
