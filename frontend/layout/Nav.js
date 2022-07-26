import styled from 'styled-components';
import Link from 'next/link';
import * as Icon from 'react-bootstrap-icons';

const Nav = () => {
    return(
        <Navbar>
            <div className="navbar-inner">
                <ul className="desktop-nav">
                    <li className="link-wrapper"><Link className="nav-link" href='/mens'>Men's</Link></li>
                    <li className="link-wrapper"><Link className="nav-link" href='/womens'>Women's</Link></li>
                    <li className="link-wrapper"><Link className="nav-link" href='/kids'>Kid's</Link></li>
                </ul>

                <div className="mobile-nav">
                    <div className="hamburger-menu">
                        <Icon.List className='action-icon'/>
                    </div>
                    
                </div>

                <div className="logo-wrapper">
                    <Link className="logo" href='/'>KiCKS</Link>
                </div>

                <div className="shopping-information">
                    
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

const Navbar = styled.div `

    ${(props) => `
        position: relative; top: 0; width: 100%; min-height: 35px;
        color: ${props.theme['$text-color-white']}; background-color: black;

        .navbar-inner{ 
            width: 100%; max-width: 1920px; margin-inline: auto;  padding: 0 36px;
            display: grid; align-items: center; grid-template-columns: 33% 33% 33%;

            @media (max-width: 768px){ padding: 10px 16px; }
        }

        .desktop-nav, .shopping-information, .logo-wrapper, .mobile-nav{ 
            display: flex; align-items: center; 
        }

        .action-icon{ font-size: 1.6rem; }

        .desktop-nav{
            list-style-type: none; justify-content: flex-start;
            padding: 0; font-size: .8rem;

            .link-wrapper{
                padding: 5px 12px;
                @media (max-width: 768px){ padding: 12px; }
            }

            @media (max-width: 970px){ display: none; }
        }

        .mobile-nav{

            .hamburger-menu{
                .action-icon{ font-size: 1.4rem; }
            }

            @media (min-width: 970px){ display: none; }
        }

        .shopping-information{
            justify-content: flex-end;

            & > *{
                padding: 5px; cursor: pointer;
                font-weight: 500; 
            }
        }


        .logo-wrapper{
            color: ${props.theme['$orange']}; justify-content: center; font-weight: 600;
        }

    `};
    
`;



export default Nav;