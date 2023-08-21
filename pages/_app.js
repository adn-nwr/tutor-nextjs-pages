// import Layout from "../components/Layout";

export default ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);

  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );
};
