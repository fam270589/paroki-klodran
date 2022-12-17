import HomeCompLayout from "../layout/HomeCompLayout";
import styles from "./Artikel.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Artikel component-----://
const Artikel = (props: Props) => {
	return (
		<HomeCompLayout title="Artikel">
			<div className={styles.container}>
				<div className={styles.artikel}>
					<p className={styles.title}>Artikel 1</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illo asperiores, culpa ipsum, voluptas aut vero optio debitis officiis accusantium praesentium nesciunt earum ea, iste enim deserunt sint cumque recusandae.</p>
				</div>
				<div className={styles.artikel}>
					<p className={styles.title}>Artikel 2</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illo asperiores, culpa ipsum, voluptas aut vero optio debitis officiis accusantium praesentium nesciunt earum ea, iste enim deserunt sint cumque recusandae.</p>
				</div>
				<div className={styles.artikel}>
					<p className={styles.title}>Artikel 3</p>
					<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illo asperiores, culpa ipsum, voluptas aut vero optio debitis officiis accusantium praesentium nesciunt earum ea, iste enim deserunt sint cumque recusandae.</p>
				</div>
			</div>
		</HomeCompLayout>
	);
};

export default Artikel;
