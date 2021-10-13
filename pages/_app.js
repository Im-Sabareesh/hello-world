import '../styles/globals.scss'
import '../styles/globals-responsive.scss'
import {Layout} from '@components'

function MyApp({ Component, pageProps }) {

  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
    )
}

export default MyApp