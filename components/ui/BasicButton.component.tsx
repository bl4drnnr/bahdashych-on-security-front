import React from 'react';
import classNames from "classnames";
import styles from "@styles/components/BasicButton.module.scss"

interface IBasicButton {
  className?: string;
  children: string;
  onClick: () => Promise<any>;
}

const BasicButton = ({ className, children, onClick, ...props }: IBasicButton) => {
  return (
    <button {...props} className={classNames(styles.basicButton)}>{children}</button>
  )
};

export default BasicButton;
