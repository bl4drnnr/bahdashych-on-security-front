import styles from '../styles/components/Header.module.scss';
import Button from "./Button";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__inner}>
        <h1 className={styles.header__headerTitle}>Blog</h1>
        <div className={styles.header__buttons}>
          <Button title={'Log in'}/>
          <Button title={'Register'}/>
        </div>
      </div>
    </div>
  )
}

export default Header;
