import Layout from "../components/Layout";
import "../styles/globals.css";

export default ({ Component, pageProps }) => {
  const getLayout = Component.getLayout;
  if (getLayout == undefined) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return getLayout();
  }
};
