import { Head, Nav } from "../layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, mixins } from "../styles";
import Footer from "./Footer";

const Layout = ({children, color}) => {

  return (
    <>
        <div className="root">
            <ThemeProvider theme={mixins}>
                <GlobalStyles/>
                
                <div className="app-content">
                    <Nav color={color}/>
                    <main className="main-container">
                        {children}
                    </main>  
                    <Footer/>
                </div>

                
            </ThemeProvider>
        </div>
    </>
  )
}

export default Layout;