import Link from "next/link";
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
					<Link href={"/profil"} className={styles.menu}>
						Profil
					</Link>
					<Link href={"/informasi"} className={styles.menu}>
						Informasi
					</Link>
					<Link href={"/artikel"} className={styles.menu}>
						Artikel
					</Link>
					<Link href={"/media"} className={styles.menu}>
						Media
					</Link>
					<Link href={"/kontak"} className={styles.menu}>
						Kontak
					</Link>
				</div>
			</div>
			<div className={styles.menuDesktop}>
				<Link href={"/profil"} className={styles.menu}>
					Profil
				</Link>
				<Link href={"/informasi"} className={styles.menu}>
					Informasi
				</Link>
				<Link href={"/artikel"} className={styles.menu}>
					Artikel
				</Link>
				<Link href={"/media"} className={styles.menu}>
					Media
				</Link>
				<Link href={"/kontak"} className={styles.menu}>
					Kontak
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
