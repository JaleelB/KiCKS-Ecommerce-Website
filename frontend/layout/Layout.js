import { Head, Nav } from "../layout";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, mixins } from "../styles";
import Footer from "./Footer";
import { useNavContext } from "../context/NavContext";

const StyledBlurBackground = styled.div`
    position: fixed; top:0; left: 0; bottom: 0; right: 0;
    background-color: hsla(0,0%,7%,.36); backdrop-filter: blur(8px);
    opacity: ${props => props.backgroundBlur ? 1 : 0};
`;

const Layout = ({children, color}) => {

    const { backgroundBlur } = useNavContext();

  return (
    <>
        <div 
            className="root"
            style={{
                backgroundColor: color === 'white' && '#000',
                color: color && color
            }}
        >
            <ThemeProvider theme={mixins}>
                <GlobalStyles/>

                <Nav color={color}/>
                <div 
                    className="app-content" 
                    
                >
                    <StyledBlurBackground backgroundBlur={backgroundBlur}/>
                    <main className="main-container">
                        {children}
                    </main>  
                   
                </div>

                <Footer color={color}/>
            </ThemeProvider>
        </div>
    </>
  )
}

export default Layout;