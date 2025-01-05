import { BrowserRouter, Route, Routes } from "react-router-dom";

import ChaosTriangle from "./patterns/ChaosTriangle/";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import styles from "./styles/App.module.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chaos-triangle" element={<ChaosTriangle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
