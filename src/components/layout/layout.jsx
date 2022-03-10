import Header from "./Header";
import Footer from "./Footer";

import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
