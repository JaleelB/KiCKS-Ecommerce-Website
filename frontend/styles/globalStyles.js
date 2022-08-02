import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
    ${variables}

    html {
        box-sizing: border-box; width: 100%; scroll-behavior: smooth;
        scrollbar-width: thin; overflow-x:hidden; 
    }
  
    *, *:before, *:after { box-sizing: inherit; margin: 0; padding: 0;}

    body {
        margin: 0; width: 100vw; min-height: 100%;  overflow-x: hidden;
        background-color: var(--black); color: var(--primary-white); line-height: 1.3;
        font-family: var(--ft-sans); font-size: var(--fz-xl);

        main{
            width: 100%; max-width: 1920px; 
            min-height: 100vh; margin-inline: auto;

            section{
                width: 100%; height: 100%; 
                @media(max-width: 760px){padding: 40px 0;}
                padding: 80px 0;

                .inner{
                    width: 90%; margin-inline: auto;
                    svg{
                        font-size: var(--ft-lg)
                    }
                }

                /* svg{
                    font-size: var(--ft-lg)
                } */
            }
        }
        
    }
`;

export default GlobalStyles; 
