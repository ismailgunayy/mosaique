import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss";
import { routes } from "../routes";

const Home = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>Mosaique</h1>
			<h4 className={styles.slogan}>created to demonstrate the beauty of math</h4>
			<h5 className={styles.listHeader}>Available Visualisations</h5>
			<div className={styles.navigation}>
				{routes.slice(1).map((route, index) => (
					<Link
						to={route.path}
						key={index}
					>
						{route.name}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Home;
