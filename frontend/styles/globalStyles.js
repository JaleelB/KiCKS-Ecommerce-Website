import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
    ${variables}

    html {
        box-sizing: border-box; width: 100%; scroll-behavior: smooth;
        scrollbar-width: thin;
    }
  
    *, *:before, *:after { box-sizing: inherit; margin: 0; padding: 0;}

    body {
        margin: 0; width: 100%; min-height: 100%;  overflow-x: hidden;
        background-color: var(--primary-black); color: var(--primary-white); line-height: 1.3;
        font-family: var(--font-sans); font-size: var(--fz-xl);

        main{
            width: 100vw; min-height: 100vh;

            section{
                width: 100%; border: 1px solid red;
            }
        }
        
    }
`;

export default GlobalStyles; 
