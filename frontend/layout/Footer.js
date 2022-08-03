import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled.a`
    color: var(--primary-white); text-decoration: none; cursor: pointer; 
`;

const StyledFooter = styled.section`

    width: 100%; max-width: 1920px; 
    margin-inline: auto;
    background-color: ${props => props.color};

    @media(max-width: 760px){padding: 40px 0;}
    padding: 80px 0;

    .inner{
        width: 90%; margin-inline: auto;
                

        .footer-title{ 
            text-align: center; color: var(--orange); 
            font-size: var(--ft-logo); margin-bottom: 1rem
        }

        .footer-links-wrapper{
            display: flex; flex-direction: row; align-items: flex-start; flex-wrap: wrap;
            -webkit-box-align: start; -webkit-box-orient: horizontal; -webkit-box-direction: normal;
            margin: 0 0 14px 0; font-size: 13px; padding: 0;
            
            .footer-link-wrapper{ 
                list-style-type: none; margin-bottom: 16px; text-align: center;
                -webkit-box-flex: 0; -webkit-flex: 0 0 50%; -moz-box-flex: 0; -ms-flex: 0 0 50%; flex: 0 0 50%;
                -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;
                
                @media screen and (min-width: 800px){  -webkit-flex-basis: 25%; -ms-flex-preferred-size: 25%; flex-basis: 25%; }

            } 
        }
    }
`;

const Footer = ({color}) => {

    const links = [
        'Instagram', 'Youtube', 'Facebook', 'About US',
        'High Res Images', 'Employment', 'Police/Military', 'Terms of Use', 'Becomne a Dealer',
        'PowerTrain Systems', 'Financing', 'Incentives', 'Promotions'
    ];

  return (
    <StyledFooter color={color === "white" ? '#000' : color}>
        <div className="inner">
            <h2 className="footer-title">KiCKS</h2>
            <ul className="footer-links-wrapper">
                {
                    links.map((link, index)=>{
                        return (
                            <li key={index} className="footer-link-wrapper">
                                <StyledLink className="footer-link" href='#'>{link}</StyledLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </StyledFooter>
  )
}

export default Footer