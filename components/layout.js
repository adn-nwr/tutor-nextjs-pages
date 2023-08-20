import Navbar from "./navbar";
import Footer from "./footer";

export default ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
