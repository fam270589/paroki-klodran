import styles from './PageLayout.module.css';

type Props = {
  children?: React.ReactNode;
  // props....
};

//todo:-----PageLayout component-----://
const PageLayout = (props: Props) => {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default PageLayout;