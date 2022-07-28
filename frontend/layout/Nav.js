import styled from 'styled-components';
import Link from 'next/link';
import * as Icon from 'react-bootstrap-icons';
import { NavMenuToggle } from './NavMenuToggle';
import { motion, useCycle } from "framer-motion";

const Navbar = styled.div `

    ${(props) => `
        position: relative; top: 0; width: 100%; min-height: 35px;
        background-color: ${props => (props.color && props.color)};

        .navbar-inner{ 
            width: 100%; max-width: 1920px; margin-inline: auto;
            display: grid; align-items: center; grid-template-columns: 33% 33% 33%;

            @media (max-width: 970px){ padding: 5px 0; }
        }

        .desktop-nav, .shopping-information, .logo-wrapper, .mobile-nav{ 
            display: flex; align-items: center;
        }

        .action-icon{ 
            font-size: 1.6rem; 

            path{ stroke-width: 1; }
        }

        .desktop-nav{
            list-style-type: none; justify-content: flex-start;
            font-size: .8rem; padding-left:5%; 

            .link-wrapper{
                padding: 5px 12px;
                @media (max-width: 768px){ padding: 12px; }
            }

            @media (max-width: 970px){ display: none; }
        }

        

        .mobile-nav{
            padding-left: 5%;

            nav{
                position: relative; 

                .background{
                    position:absolute; top: -2rem;  bottom: 0; left: 0;
                    width: 300px; height: 110vh; background-color: #fff;
                    z-index: 2000; margin-left: -5%; 
                }

                .mobile-nav-links,.nav-link {
                    margin: 0; padding: 0;
                }

                .mobile-nav-links{
                    position: absolute; top: 3rem; z-index: 2000; 
                    margin-inline: auto; width: 300px; 

                    .link-wrapper {
                        list-style: none; margin-bottom: 20px; width: 100%;
                        display: flex; align-items: center; padding: 0 25px;
                        color: black; cursor: pointer; font-weight: 600;

                    
                        div{
                            display: flex; align-items: center; 
                            justify-content: space-between; width: 100%;
                        } 
                           
                    }
                }

                button{
                    background-color: transparent; appearance: none;  outline: none;
                    border: none; color: ${props.theme['$text-color-white']}; 
                    z-index: 3000; top: -.3rem;          
                    svg{
                        width: 1.2rem; height: 1.2rem; margin-top: -1rem; padding-left:5%; 
                    }
                }
            }

            @media (min-width: 970px){ display: none; }
        }

        .shopping-information{
            justify-content: flex-end; padding-right: 5%; 

            & > *{
                padding: 5px 8px; cursor: pointer;
                font-weight: 500; font-size:${props.theme['$ft-heading']};
            }
        }


        .logo-wrapper{
            color: ${props.theme['$orange']}; justify-content: center; font-weight: 700;

            .logo{ font-size:${props.theme['$ft-heading']}; }
        }

    `};
    
`;


const Nav = ({color}) => {

    const links = [`Men's`, `Women's`, `Kid's`];
    const urlPaths = [`men`, `women`, `kid`];
    
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

    return(
        <Navbar>
            <div className="navbar-inner">
                <ul className="desktop-nav" style={{color: color && color}}>
                    {
                        links.map((link, index)=>{
                            return  (
                                <li 
                                    className="link-wrapper"
                                    key={index}
                                >
                                    <Link className="nav-link" href={`/${urlPaths[index]}`}>{link}</Link>
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
                        <motion.div className="background" variants={sidebar} />

                        <ul className="mobile-nav-links">
                            {
                                links.map((link, index)=>{
                                    return  (
                                        <motion.li 
                                            className="link-wrapper"
                                            variants={variants}
                                            whileTap={{ scale: 0.8 }}
                                            key={index}
                                        >
                                            <Link className="nav-link" href={`/${urlPaths[index]}`}>
                                                <div>
                                                    {link}
                                                    <Icon.ChevronRight/>
                                                </div>
                                            </Link>
                                            
                                        </motion.li>
                                    )
                                })
                            }
                        </ul>
                        
                        <NavMenuToggle 
                            toggle={() => {
                                toggleOpen();
                            }} 
                            toggleValue={isOpen}
                            color={color}
                        />
                    </motion.nav>
                    
                </div>

                

                <div className="logo-wrapper">
                    <Link className="logo" href='/'>KiCKS</Link>
                </div>

                <div className="shopping-information" style={{color: color && color}}>
                    
                    <Link className="watchlist" href='/watchlist'>
                        <Icon.Heart className='action-icon'/>
                    </Link>

                    <Link className="profile" href='/profile'>
                        <Icon.People className='action-icon'/>
                    </Link>

                    <Link className="cart" href='/cart'>
                        <Icon.Bag className='action-icon'/>
                    </Link>
                    
                </div>
            </div> 
        </Navbar>
    );

};

export default Nav;