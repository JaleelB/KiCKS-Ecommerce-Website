import styled from "styled-components";

export const Navbar = styled.div `
    position: relative; top: 0;
    display: flex;  justify-content: space-evenly; align-items: center;
    width: 100%; min-height: 35px; border: 1px solid green;
    color: inherit; 
`;

export const NavLinks = styled.div `
    display: flex;  
`;

export const NavLogo = styled.h1 `
    color: #FF3D00; font-weight: 500; font-size: clamp(1.2rem , 5vw, 2rem);
`;

export const ShoppingInformation = styled.p `
    color: #fff; 
`;

