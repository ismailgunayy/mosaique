import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import SierpinskiTriangle from "./pages/SierpinskiTriangle";
import styles from "./App.module.scss";

const Navigation = () => {
  const location = useLocation();

  return location.pathname == "/" ? null : (
    <div className={styles.navigation}>
      <Link to="/">Home</Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sierpinski-triangle" element={<SierpinskiTriangle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
