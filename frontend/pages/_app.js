import '../styles/globals.css'
import {Provider, createClient} from "urql";

const client = createClient({url: 'http://localhost:1337/graphql'});

function MyApp({ Component, pageProps }) {
  return( 
    //provider gives access to graphql from strapi to access data from backend without providing url
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider> 
  )
}

export default MyApp
