import LayoutLogin from "../components/LayoutLogin";

export default function login() {
  return (
    <>
      <h3>Halaman Login disini</h3>
    </>
  );
}

login.getLayout = function getLayout(page) {
  return <LayoutLogin>{page}</LayoutLogin>;
};
