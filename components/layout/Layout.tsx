import React from 'react';
import Navbar from '../navbar/Navbar';

type Props = {
  children?: React.ReactNode;
  // props....
};

//todo:-----Layout component-----://
const Layout = (props: Props) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout;