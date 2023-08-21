import Footer from "./Footer";

export default function LayoutLogin({ children }) {
  return (
    <>
      <h1>Login User</h1>
      {children}
      <Footer />
    </>
  );
}
