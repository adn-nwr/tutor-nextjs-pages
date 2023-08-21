import Layout from "../components/Layout";

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
