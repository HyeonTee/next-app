import Chakra from '../components/chakra'
import Fonts from '../components/fonts'
import Layout from '../components/layout'

function App({ Component, pageProps }) {
  return (
    <Chakra>
      <Fonts />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default App