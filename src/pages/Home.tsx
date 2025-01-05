import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <h4>
        <em>created to demonstrate the beauty of math</em>
      </h4>
      <h5 className={styles.subheader}>Available Visualisations</h5>
      <div className={styles.navigation}>
        <Link to="/sierpinski-triangle">Sierpiński Triangle</Link>
      </div>
    </div>
  );
};

export default Home;
