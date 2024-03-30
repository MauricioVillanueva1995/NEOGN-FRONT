import styles from "./CubeLoader.module.css";

const CubeLoader = () => {
  return (
    <div>
      <div className={styles.overlay} id="overlay"></div>
      <div className={styles.loader}>
        <div className={styles.loaderCube}>
          <div className={styles.face}></div>
          <div className={styles.face}></div>
          <div className={styles.face}></div>
          <div className={styles.face}></div>
          <div className={styles.face}></div>
          <div className={styles.face}></div>
        </div>
      </div>
    </div>
  );
};

export default CubeLoader;
