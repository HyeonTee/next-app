import Layout from '../components/layout'
import Chakra from '../components/chakra'

function App({ Component, pageProps }) {
  return (
    <Chakra>
      <Component {...pageProps} />
    </Chakra>
  );
}

export default App