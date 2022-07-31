import { Head, Nav } from "../layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, mixins } from "../styles";

const Layout = ({children, color}) => {

  return (
    <>
        <div className="root">
            <ThemeProvider theme={mixins}>
                <GlobalStyles/>
                <Nav color={color}/>

                <div className="app-content">
                    <main className="main-container">
                        {children}
                    </main>
                    
                </div>
            </ThemeProvider>
        </div>
    </>
  )
}

export default Layout;