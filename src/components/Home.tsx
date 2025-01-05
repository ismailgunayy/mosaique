import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Mosaique</h1>
      <h4 className={styles.slogan}>
        <em>created to demonstrate the beauty of math</em>
      </h4>
      <h5 className={styles.listHeader}>Available Visualisations</h5>
      <div className={styles.navigation}>
        <Link to="/chaos-triangle">Chaos Triangle</Link>
      </div>
    </div>
  );
};

export default Home;
