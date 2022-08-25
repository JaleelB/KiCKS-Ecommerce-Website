import styled from 'styled-components';
import Link from 'next/link';
import * as Icon from 'react-bootstrap-icons';
import { NavMenuToggle } from './NavMenuToggle';
import { motion, useCycle } from "framer-motion";
import {useNavContext} from '../context/NavContext';
import { useEffect } from 'react';
import { useCartContext } from '../context/CartContext';
import { UserProfile } from '../components';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

const StyledNavLogo = styled.a`
    font-size:var(--ft-logo); font-weight: 500;
    color: var(--orange); text-decoration: none;
`

const Navbar = styled.div `

    ${(props) => `
        position: relative; top: 0; width: 100%; min-height: 35px;
        // background-color: ${props => (props.color && props.color)};

        .navbar-inner{ 
            width: 100%; max-width: 1920px; margin-inline: auto;
            display: grid; align-items: center; grid-template-columns: 33% 33% 33%;

            @media (max-width: 970px){ padding: 5px 0; }
        }

        .desktop-nav, .shopping-information, .logo-wrapper, .mobile-nav{ 
            display: flex; align-items: center;
        }

        .desktop-nav{
            list-style-type: none; justify-content: flex-start;
            font-size: var(--ft-xs); padding: 12px 0 12px 5%; 

            .link-wrapper{
                padding: 5px 12px;
                @media (max-width: 768px){ padding: 12px; }

                a{
                    text-decoration: none; color: inherit; font-weight: 500;
                }
            }

            @media (max-width: 970px){ display: none; }
        }


        .mobile-nav{
            
            nav{
                position: relative; padding-left: 5%;

                .background-wrapper{
                    position:fixed;  bottom: 0; left: 0; border :1px solid red
                    width: 100vw; z-index: 2000; 
                }
                .background{
                    width: min(75vw, 400px); height: 100vh; 
                    background-color: var(--primary-white);
                }

                .mobile-nav-links,.nav-link {
                    margin: 0; padding: 0;
                }

                .mobile-nav-links{
                    position: fixed;  z-index: 2000; 
                    top: 6rem;  height: 90%;
                    width: min(calc(75vw - 25px), 375px);

                    .link-wrapper {
                        list-style: none; margin-bottom: 20px; width: 100%;
                        display: flex; align-items: center; padding: 0 25px;
                        color: black; cursor: pointer; font-weight: 700;

                    
                        div{
                            display: flex; align-items: center; 
                            justify-content: space-between; width: 100%;
                        } 

                        &.btn{
                            position: absolute; bottom: 2rem;
                            // a{
                                button{
                                    color: var(--text-color-white); background-color: var(--black);
                                    min-width: 150px; width: 85%; max-width: 500px; min-height: 30px;
                                    font-size: var(--ft-lg); font-family: var(--font-mono); appearance: none;
                                    line-height: 1; text-decoration: none;  cursor:pointer; border: none;
                                    cursor: pointer; transition: var(--transition); padding: .8rem 1.75rem;
                                }
                            // }
                        }
                    }

                    
                }

                button{
                    background-color: transparent; appearance: none;  outline: none;
                    border: none; z-index: 3000; top: -.3rem; position: absolute;     
                    svg{
                        width: 1.2rem; height: 1.2rem; margin-top: -1rem; padding-left:5%; 
                    }
                }
            }

            @media (min-width: 970px){ display: none; }
        }

        .shopping-information{
            justify-content: flex-end; padding-right: 5%; 

            div{
                display: flex; align-items: center;
                & > *{
                    padding: 5px 8px; cursor: pointer;
                    font-size: 2.2rem;

                    &.icon-text{
                        font-size: var(--ft-xs); font-weight: 500;
                        padding:0; 
                    }
                } 

                .shopping-icon{
                    display: flex; align-items:center; position: relative;
                    padding: 0;

                    .cart-total{
                        position: absolute; top: .5rem; left: .4rem;
                        font-size: var(--ft-xxs);
                    }
                }

            }
            
        }


        .logo-wrapper{
             justify-content: center; font-weight: 700;
        }

    `};
    
`;


const Nav = ({color}) => {

    const links = [`Men's`, `Women's`, `Kid's`];
    const urlPaths = [`men`, `women`, `kids`];
    
    const sidebar = {
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at 0px 0px)`,
          transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
          }
        }),
        closed: {
          clipPath: "circle(0px at 0px 0px)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
          }
        }
    };

    const variants = {
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 }
          }
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 }
          }
        }
    };

    const [isOpen, toggleOpen] = useCycle(false, true);

    const { setBackgroundBlur } = useNavContext();
    const {ttlItems} = useCartContext();

    const {user} = useUser();
    const route = useRouter();


    useEffect(()=>{
        setBackgroundBlur(isOpen);
    },[isOpen])

    return(
        <Navbar>
            <div className="navbar-inner">
                <ul className="desktop-nav" >
                    {
                        links.map((link, index)=>{
                            return  (
                                <li 
                                    className="link-wrapper"
                                    key={index}
                                    style={{color: `${color}`}}
                                >
                                    <Link 
                                        className="nav-link"
                                        href={`/productsresult/${urlPaths[index]}`}
                                        
                                    >
                                        {link}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="mobile-nav">
      
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                    >   
                        <div className="background-wrapper">
                            <motion.div className="background" variants={sidebar} />
                        </div>
                        

                        <ul className="mobile-nav-links">
                            {
                                links.map((link, index)=>{
                                    return  (
                                        <motion.li 
                                            className="link-wrapper"
                                            variants={variants}
                                            whileTap={{ scale: 0.8 }}
                                            key={index}
                                            style={{pointerEvents: !isOpen && 'none'}}
                                        >
                                            <Link className="nav-link" href={`/productsresult/${urlPaths[index]}`}>
                                                <div>
                                                    {link}
                                                    <Icon.ChevronRight/>
                                                </div>
                                            </Link>
                                            
                                        </motion.li>
                                    )
                                })
                            }

                           { user && 
                                    (<motion.li 
                                        className="link-wrapper profile"
                                        variants={variants}
                                        whileTap={{ scale: 0.8 }}
                                        style={{pointerEvents: !isOpen && 'none'}}
                                    >
                                        <Link className="nav-link" href={`/profile`}>
                                            <div>
                                                Profile
                                                <Icon.ChevronRight/>
                                            </div>
                                        </Link>
                                                    
                                    </motion.li>) 
                            }


                            <motion.li 
                                className="link-wrapper btn"
                                variants={variants}
                                whileTap={{ scale: 0.8 }}
                                style={{pointerEvents: !isOpen && 'none'}}
                            >
                                {/* <Link className="nav-link" href={`${user ? '' : '/profile'}`}> */}
                                    <button
                                        onClick={() => user ? route.push('/api/auth/logout') : route.push('/api/auth/login')}
                                    >
                                        {user ? 'Logout' : 'Sign In'}
                                    </button>
                                {/* </Link> */}
                                                    
                            </motion.li>
                        </ul>
                        
                        <NavMenuToggle 
                            className="nav-toggle"
                            toggle={() => {
                                toggleOpen();
                            }} 
                            toggleValue={isOpen}
                            color={color}
                        />
                    </motion.nav>
                    
                </div>

                

                <div className="logo-wrapper">
                    <StyledNavLogo href='/'>KiCKS</StyledNavLogo>
                </div>

                <div className="shopping-information">
                    <UserProfile/>
                    <Link className="cart" href='/cart'>
                        <div>
                            <div className="shopping-icon">
                                <Icon.Bag className='action-icon' style={{fill: color && color}}/>
                                <p className="cart-total">{ttlItems}</p>
                            </div>
                        </div>
                    </Link>
                    
                </div>


            </div> 
        </Navbar>
    );

};

export default Nav;