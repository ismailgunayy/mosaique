import { Link, useLocation } from "react-router-dom";

import styles from "../styles/Navigation.module.scss";

const Navigation = () => {
  const location = useLocation();

  return location.pathname == "/" ? null : (
    <div className={styles.navigation}>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Navigation;
