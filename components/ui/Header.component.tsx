import Link from 'next/link';
import React from "react";
import BasicButton from "./BasicButton.component";
import Loader from "./Loader.component";
import styles from '../../styles/components/Header.module.scss';
import classNames from "classnames";
import { useLogoutService } from "@services/user/logout/logout.service";
import { useRouter } from "next/router";
import { useRefreshTokenService } from "@services/auth/refresh/refreshToken.service";
import { IToken } from "../../dto/token.interface";

const Header = () => {
  const [loggedData, setLoggedData] = React.useState<IToken>({
    roles: [], type: '', userId: '', username: ''
  })

  const router = useRouter()

  const { refreshToken, loading } = useRefreshTokenService()
  const { logout, loading: logoutLoading } = useLogoutService()

  const handleRedirect = (path: string) => {
    return router.push(path)
  }

  const handleLogout = async () => {
    await logout({ accessToken: sessionStorage.getItem("_at") })
    sessionStorage.removeItem('_at')
    await router.push('/')
  }

  const handleRefreshToken = async () => {
    if (!sessionStorage.getItem('_at')) return;

    await refreshToken();
  }

  React.useEffect(() => {
    handleRefreshToken().then()
  }, [])

  return (
    <div className={styles.header}>
      {loading || logoutLoading ? <Loader/> : null}
      <div className={styles.headerContainer}>

        <h1
          className={styles.logo}
          onClick={() => handleRedirect('/')}
        >MB</h1>

        <div>
          {loggedData.roles.find((role) => role.value === 'ADMIN') ? (
            <BasicButton onClick={() => handleRedirect('/admin')}>
              Admin
            </BasicButton>
          ) : null}
          {!loggedData.userId ? (
            <>
              <Link href={"/sign-in"}>
                <a className={styles.link}>Sign in</a>
              </Link>
              <Link href={"/sign-up"}>
                <a className={classNames(styles.link, styles.fill)}>Sign up</a>
              </Link>
            </>
          ) : (
            <BasicButton onClick={() => handleLogout()}>
              Logout
            </BasicButton>
          )}
        </div>

      </div>
    </div>
  )
}

export default Header;
