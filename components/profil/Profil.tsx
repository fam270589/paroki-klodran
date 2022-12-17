import HomeCompLayout from "../layout/HomeCompLayout";
import styles from "./Profil.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Profil component-----://
const Profil = (props: Props) => {
	return (
		<HomeCompLayout title="Profil">
			<div className={styles.container}>
				<p>
					Paroki Santo Yakobus Bantul adalah suatu paroki dari Gereja Katolik
					Roma yang berada di bawah Keuskupan Agung Semarang. Pusat Paroki
					terletak di kota Bantul, yang terletak dalam wilayah Provinsi Daerah
					Istimewa Yogyakarta.
				</p>
				<button className={styles.button}>Selengkapnya...</button>
			</div>
		</HomeCompLayout>
	);
};

export default Profil;
