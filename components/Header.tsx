import styles from '../styles/components/Header.module.scss';
import Button from "./Button";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <Link href={'/'}>
          <h1 className={styles.header__headerTitle}>Blog</h1>
        </Link>
        <div className={styles.header__buttons}>
          <Link href={'/sign-in'}>
            <Button title={'Log in'}/>
          </Link>
          <Link href={'/sign-in'}>
            <Button title={'Register'}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;
