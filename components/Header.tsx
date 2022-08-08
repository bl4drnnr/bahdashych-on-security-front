import styles from '../styles/components/Header.module.scss';
import BasicButton from "./BasicButton";
import Link from "next/link";

const Header = () => {

  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <Link href={'/'}>
          <h1 className={styles.header__headerTitle}>Blog</h1>
        </Link>
        <div className={styles.header__buttons}>
          <BasicButton>Log in</BasicButton>
          <BasicButton>Register</BasicButton>
        </div>
      </div>
    </div>
  )
}

export default Header;
