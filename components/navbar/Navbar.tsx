import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

import styles from "./Navbar.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Navbar component-----://
const Navbar = (props: Props) => {
	const [isMenuOpened, setIsMenuOpened] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.logoWrapper}>
				<p className={styles.small}>Gereja</p>
				<p>St. Yakobus</p>
				<p>Bantul</p>
			</div>
			<div className={styles.menuMobile}>
				{isMenuOpened ? (
					<MdClose
						className={styles.menuButton}
						onClick={() => setIsMenuOpened(false)}
					/>
				) : (
					<MdMenu
						className={styles.menuButton}
						onClick={() => setIsMenuOpened(true)}
					/>
				)}
				<div className={isMenuOpened ? styles.menusMOpen : styles.menusMClosed}>
					<h5 className={styles.menu}>Profil</h5>
					<h5 className={styles.menu}>Informasi</h5>
					<h5 className={styles.menu}>Artikel</h5>
					<h5 className={styles.menu}>Media</h5>
					<h5 className={styles.menu}>Kontak</h5>
				</div>
			</div>
			<div className={styles.menuDesktop}>
				<h5 className={styles.menu}>Profil</h5>
				<h5 className={styles.menu}>Informasi</h5>
				<h5 className={styles.menu}>Artikel</h5>
				<h5 className={styles.menu}>Media</h5>
				<h5 className={styles.menu}>Kontak</h5>
			</div>
		</div>
	);
};

export default Navbar;
