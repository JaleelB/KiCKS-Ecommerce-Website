import styled from "styled-components";

const StyledImportantSection = styled.section`
    padding: 0; 

    .inner{
      ${({ theme }) => theme.flexSpaceBetween};

      @media(max-width: 759px){
        ${({ theme }) => theme.flexColumn};
      }
    }

`;

const StyledLink = styled.a`
    width: 49.5%; position: relative;
    text-decoration: none; color: var(--primary-white);

    @media(max-width: 759px){ width: 100%; }

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

  const sections = [
    {
        title: 'New Classics',
        url: 'https://images.pexels.com/photos/6726156/pexels-photo-6726156.jpeg?cs=srgb&dl=pexels-hipkicks-6726156.jpg&fm=jpg'
    },
    {
      title: 'Summer Essentials',
        url: 'https://images.pexels.com/photos/1456735/pexels-photo-1456735.jpeg?cs=srgb&dl=pexels-ray-piedra-1456735.jpg&fm=jpg'
    }
  ]

  return (
    <StyledImportantSection>
      <div className="inner">
        {
          sections.map((section, index)=>{
            return (
              <StyledLink href={'/newclassics'} key={index}>
                <h3 className="section-title">{section.title}</h3>
                <button className="cta-button">See More</button>
                <img className="background" src={section.url} alt=""/>
              </StyledLink>
            )
          })
        }
      </div>
    </StyledImportantSection>
  )
}

export default Important;