import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import styles from "./styles/App.module.scss";
import { routes } from "./routes";

const App = () => {
	return (
		<BrowserRouter>
			<div className={styles.app}>
				<Navigation />
				<Routes>
					{routes.map((route, index) => (
						<Route
							{...route}
							key={index}
						/>
					))}
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
