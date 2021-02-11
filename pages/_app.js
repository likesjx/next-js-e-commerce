import "../styles/index.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
   <h1>test</h1> </Layout>
  );
}

export default MyApp;
