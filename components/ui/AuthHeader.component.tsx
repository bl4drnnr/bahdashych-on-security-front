import React from "react";
import Link from "next/link";
import styles from "@styles/components/AuthHeader.module.scss"

interface AuthHeaderProps {
  signInRoute: boolean
}

const AuthHeader = ({ signInRoute }: AuthHeaderProps) => {

  return (
    <div className={styles.authHeader}>
      <div className={styles.authHeaderContainer}>
        <Link href={'/'}>
          <h1 className={styles.logo}>MB</h1>
        </Link>

        <Link href={signInRoute ? '/sign-in': '/sign-up'}>
          <a className={styles.link}>{signInRoute ? 'Sign in': 'Sign up'}</a>
        </Link>
      </div>
    </div>
  );
};

export default AuthHeader;
