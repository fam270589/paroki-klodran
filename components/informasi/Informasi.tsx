import HomeCompLayout from "../layout/HomeCompLayout";
import styles from "./Informasi.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Informasi component-----://
const Informasi = (props: Props) => {
	return (
		<HomeCompLayout title="Informasi">
			<div className={styles.container}>
				<div className={styles.pengumuman}>
					<p className={styles.title}>Pengumuman Paroki</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur nihil ea, a ipsum facere, accusamus id praesentium, nostrum tempora quidem nisi consequatur consequuntur assumenda aperiam quos quas nesciunt dignissimos.</p>
				</div>
				<div className={styles.jadwal}>
					<p className={styles.title}>Jadwal Ekaristi</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consectetur nihil ea, a ipsum facere, accusamus id praesentium, nostrum tempora quidem nisi consequatur consequuntur assumenda aperiam quos quas nesciunt dignissimos.</p>
				</div>
			</div>
		</HomeCompLayout>
	);
};

export default Informasi;
