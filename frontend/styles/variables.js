import { css } from "styled-components";

const variables = css`

    :root{
        //color styles 
        --primary-black: #141414; 
        --primary-white: #fff; 
        --very-dark-grey : #1A1818; 
        --orange : #FF3D00; 
        --text-color-white: #fff;
        --black: #000;
        --light-grey: #676767;

        //fonts
        --ft-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
        --ft-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
        --ft-xxs: .7rem;
        --ft-xs: .8rem;
        --ft-sm: .88rem;
        --ft-md: 1rem;
        --ft-lg: 1.13rem;
        --ft-xl: 1.25rem;
        --ft-xxl: 1.38rem;
        --ft-heading: 2rem;
        --ft-logo: clamp(1.2rem, 1vw, 1.4rem);
        --ft-medium-bold: clamp(20px, 5vw, 40px);
        --ft-large-bold: clamp(35px, 5vw, 80px);
    }
`;

export default variables;