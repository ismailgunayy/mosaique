import { Link } from "react-router-dom";
import styles from "../styles/Home.module.scss";
import { routes } from "../routes";

const Home = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.header}>mosaique</h1>
			<h2 className={styles.subheader}>created to demonstrate the beauty of math</h2>
			<h5 className={styles.listHeader}>available visualisations</h5>
			<ol className={styles.navigation}>
				{routes.slice(1).map((route, index) => (
					<li className={styles.navItem}>
						<Link
							to={route.path}
							key={index}
						>
							{route.name}
						</Link>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Home;
