import React from "react";
import Link from "next/link";
import styles from "@styles/components/AuthHeader.module.scss"

const AuthHeader = () => {
  return (
    <div className={styles.authHeader}>
      <div className={styles.authHeaderContainer}>
        <Link href={'/'}>
          <h1>MB</h1>
        </Link>
      </div>
    </div>
  );
};

export default AuthHeader;
