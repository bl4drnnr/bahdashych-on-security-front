import styles from '../styles/components/Button.module.scss';

const BasicButton = ({ children, ...props }: any) => {
  return (
    <button
      {...props}
      className={styles.button}
    >{children}</button>
  )
};

export default BasicButton;
