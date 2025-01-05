import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import SierpinskiTriangle from "./pages/SierpinskiTriangle";
import styles from "./styles/App.module.scss";

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
