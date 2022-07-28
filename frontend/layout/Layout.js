import { Head, Nav } from "../layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, mixins } from "../styles";

const Layout = ({children, color}) => {

    // console.log(children);

  return (
    <>
        {/* <Head/> */}
        <div className="root">
            <ThemeProvider theme={mixins}>
                <GlobalStyles/>
                <Nav color={color}/>

                <div className="app-content">
                    {children}
                </div>
            </ThemeProvider>
        </div>
    </>
  )
}

export default Layout;