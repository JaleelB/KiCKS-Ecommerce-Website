import {Provider, createClient} from "urql";
import { ContextWrapper } from "../context/ContextWrapper";

const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API});


function MyApp({ Component, pageProps }) {
  return( 
    <ContextWrapper>
      {/* provider gives access to graphql from strapi to access data from backend without providing url */}
      <Provider value={client}> 
        <Component {...pageProps} />
      </Provider>
    </ContextWrapper>
     
  )
}

export default MyApp
