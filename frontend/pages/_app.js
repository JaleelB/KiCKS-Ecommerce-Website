import '../styles/globals.css'
import {Provider, createClient} from "urql";
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import {globalStyles} from '../styles/globalStyles';


// const client = createClient({url: process.env.BACKEND_API});
// const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API})
const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API});


function MyApp({ Component, pageProps }) {
  return( 
    //provider gives access to graphql from strapi to access data from backend without providing url
    <Provider value={client}>
       <BootstrapProvider theme={globalStyles}>
        <Component {...pageProps} />
       </BootstrapProvider>   
    </Provider> 
  )
}

export default MyApp
