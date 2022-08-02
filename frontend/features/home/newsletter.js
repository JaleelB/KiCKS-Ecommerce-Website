import { ArrowRight } from "react-bootstrap-icons";
import styled from "styled-components";

const StyledNewsLetter = styled.section`
    
    border-top: 2px solid var(--light-grey); border-bottom: 2px solid var(--light-grey);

    .inner{
        ${({ theme }) => theme.flexColumn};
        gap: 1.8rem; justify-content: center;
        max-width: 800px; 

        .newsletter-title{
            text-align: center; font-size: var(--ft-large-bold);
            .orange-text{ margin-left: .5rem; color: var(--orange)}
        }

        .supplemental-message{text-align: center;}

        .input-wrapper{
            position: relative; 

            .newslsetter-email{
                appearance: none; padding: 1.2rem 0; color: var(--primary-white);
                width: 100%;  min-height: 35px; padding-left: 1rem;
                background-color: transparent; border-style: hidden; font-size: var(--ft-md);
                border-top: 1px solid var(--primary-white); border-bottom: 1px solid var(--primary-white);

                &::placeholder{ text-align: left;  }
                &:focus{ outline: none; }
            }

            .send-btn{  
                position: absolute; right: 1rem; 
                top: 0; bottom: 0; margin: auto 0;
                font-size: clamp(25px, 5vw, 45px);
                color: var(--orange); transform: rotate(-35deg)
            }
        }
        
    }
`;

const Newsletter = () => {
  return (
    <StyledNewsLetter>
        <div className="inner">
            <h2 className="newsletter-title">
                Stay
                <span className="orange-text">Updated</span>
            </h2>
            <p className="supplemental-message">
                Subscribe to our newsletter to recieve the latest information on product drop and sales.
            </p>

            <div className="input-wrapper">
                <input 
                    type="email" 
                    className="newslsetter-email" 
                    placeholder="Enter your email here"
                />
                <ArrowRight className="send-btn"/>
            </div>
            
        </div>
    </StyledNewsLetter>
  )
}

export default Newsletter;