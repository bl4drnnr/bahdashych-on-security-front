import React from 'react';
import styles from "@styles/components/BasicInput.module.scss";

interface IBasicInput {
  className?: string;
  type: string;
  placeholder: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicInput = ({ ...props }: IBasicInput) => {
  return (
    <input { ...props } className={styles.basicInput} />
  );
};

export default BasicInput;
