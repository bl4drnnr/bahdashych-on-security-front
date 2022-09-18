import React from "react";
import styles from "@styles/components/Loader.module.scss";

const Loader = () => {
  return (
    <>
      <div className={styles.loaderContainer}>
        <div className={styles.loader} />
      </div>
    </>
  );
};

export default Loader;
