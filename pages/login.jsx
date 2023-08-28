import LayoutLogin from "../components/LayoutLogin";

export default function Login() {
  return (
    <>
      <h3>Halaman Login disini</h3>
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <LayoutLogin>{page}</LayoutLogin>;
};
