import styles from "./HomeCompLayout.module.css";

type Props = {
	children?: React.ReactNode;
	// props....
	title: string;
};

//todo:-----HomeCompLayout component-----://
const HomeCompLayout = (props: Props) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{props.title}</h3>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

export default HomeCompLayout;
