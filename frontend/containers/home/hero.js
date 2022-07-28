import styled from 'styled-components';

const StyledHeroSection = styled.section`

    ${(props) => `
        // width: 100%; height: 100vh;
        border: 1px solid ${props.theme['$orange']}

        .hero-inner{
            width: 100%; height: 100%; padding: auto 0;
            display: flex; justify-content: center; align-items: center;
        }
        
    `};
`;

const Hero = ({heroAsset}) => {

    //const {formats} = heroAsset;
    return(
        <StyledHeroSection>
            <div className="hero-inner">
                {/* <img className="hero-image" src={formats.large.url} alt='hero-image'/> */}
                {/* <img 
                    className="hero-image" 
                    src={'../../assets/hero-image.png'} 
                    alt='hero-image'
                /> */}

                <h1 className="hi">hvhvhvuh</h1>
            </div>
            
        </StyledHeroSection>
    );
};



export default Hero;