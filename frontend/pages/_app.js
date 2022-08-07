import {Provider, createClient} from "urql";
import { ContextWrapper } from "../context/ContextWrapper";
// import { NavContextProvider } from "../context/NavContext";

const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API});


function MyApp({ Component, pageProps }) {
  return( 
    // CartContextProvider
    // <NavContextProvider>
    <ContextWrapper>
      <Provider value={client}> //provider gives access to graphql from strapi to access data from backend without providing url
        <Component {...pageProps} />
      </Provider>
    </ContextWrapper>
     
  )
}

export default MyApp
