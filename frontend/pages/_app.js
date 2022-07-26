import '../styles/globals.css'
import {Provider, createClient} from "urql";


// const client = createClient({url: process.env.BACKEND_API});
// const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API})
const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API});


function MyApp({ Component, pageProps }) {
  return( 
    //provider gives access to graphql from strapi to access data from backend without providing url
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider> 
  )
}

export default MyApp
