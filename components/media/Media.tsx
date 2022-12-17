import Image from "next/image";
import HomeCompLayout from "../layout/HomeCompLayout";
import styles from "./Media.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
};

//todo:-----Media component-----://
const Media = (props: Props) => {
	return (
		<HomeCompLayout title="Media">
			<div className={styles.container}>
				<div className={styles.videoData}>
					<Image
						className={styles.image}
						src={"/static/video.jpg"}
						alt="video youtube"
						width={1920}
						height={1280}
					/>
					<p className={styles.titleVideo}>Video Youtube 1</p>
				</div>
				<div className={styles.videoData}>
					<Image
						className={styles.image}
						src={"/static/video.jpg"}
						alt="video youtube"
						width={1920}
						height={1280}
					/>
					<p className={styles.titleVideo}>Video Youtube 2</p>
				</div>
				<div className={styles.videoData}>
					<Image
						className={styles.image}
						src={"/static/video.jpg"}
						alt="video youtube"
						width={1920}
						height={1280}
					/>
					<p className={styles.titleVideo}>Video Youtube 3</p>
				</div>
			</div>
		</HomeCompLayout>
	);
};

export default Media;
