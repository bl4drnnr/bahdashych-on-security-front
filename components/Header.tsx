import styles from '../styles/components/Header.module.scss';
import BasicButton from "./BasicButton";
import BasicInput from "./BasicButton";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.inner}>

        <Link href={'/'}>
          <h1 className={styles.title}>Blog</h1>
        </Link>

        <div>
          <BasicInput/>
        </div>

        <div className={styles.buttons}>
          <BasicButton>
            <Link href={'/sign-in'}>
              Log in
            </Link>
          </BasicButton>

          <BasicButton>
            <Link href={'/sign-in'}>
              Register
            </Link>
          </BasicButton>
        </div>

      </div>
    </div>
  )
}

export default Header;
