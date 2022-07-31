import styled from "styled-components";

const StyledImportantSection = styled.section`
    padding: 0; 

    .inner{
      width: 90%; margin-inline:auto; 
      ${({ theme }) => theme.flexSpaceBetween};

      @media(max-width: 480px){
        ${({ theme }) => theme.flexColumn};
      }
    }

`;

const StyledLink = styled.a`
    width: 49.5%; position: relative;
    text-decoration: none; color: var(--primary-white);

    @media(max-width: 480px){ width: 100%; }

    .section-title{ 
      position: absolute; top: 1rem; 
      left: 1rem; font-size: clamp(25px, 5vw, 40px) 
    
    }

    .cta-button{ 
        position: absolute; bottom: 1rem; right: 1rem;
        min-height: 20px !important; width: 50% !important;
        
        @media(max-width: 480px){ padding-top: .5rem !important; }

        ${({ theme }) => theme.CTAButton};
     }

    .background{
      inline-size: 100%; object-fit: contain;
    }
`;

const Important = () => {
  return (
    <StyledImportantSection>
      <div className="inner">
        <StyledLink href={'/newclassics'}>
          <h3 className="section-title">New Classics</h3>
          <button className="cta-button">See More</button>
          <img className="background" src={`https://images.pexels.com/photos/6726156/pexels-photo-6726156.jpeg?cs=srgb&dl=pexels-hipkicks-6726156.jpg&fm=jpg`} alt=""/>
        </StyledLink>

        <StyledLink href={'/summer-essentials'}>
          <h3 className="section-title">Summer Essentials</h3>
          <button className="cta-button">See More</button>
          <img className="background" src={`https://images.pexels.com/photos/1456735/pexels-photo-1456735.jpeg?cs=srgb&dl=pexels-ray-piedra-1456735.jpg&fm=jpg`} alt=""/>
        </StyledLink>
      </div>
    </StyledImportantSection>
  )
}

export default Important;