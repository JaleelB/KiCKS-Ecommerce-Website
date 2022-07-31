import styled from 'styled-components';


const StyledHeroSection = styled.section`

    .hero-inner{
        width: 90%; padding: 70px 0;
         margin-inline: auto; 
         ${({ theme }) => theme.flexColumn};

        .hero-center{
            position: relative; 
            @media(min-width: 768px){margin-bottom: 10rem;}

            .large-bold-text{
                position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
                font-size: clamp(150px, 35vw, 500px); 
                /* font-size: max(30vw, 250px);  */
                text-transform: uppercase;
                color: var(--primary-white);  text-shadow: -2px 2px 0 var(--primary-white),
                                                    2px 2px 0 var(--primary-white),
                                                    2px -2px 0 var(--primary-white),
                                                    -2px -2px 0 var(--primary-white);
            }

            .hero-image-wrapper{
                width: 100%; transform: rotate(-25deg);
                ${({ theme }) => theme.flexCenter};

                .hero-image{
                    inline-size: 100%; object-fit: contain; 
                    max-width: 1000px;   
                }
            }
        }

        .product-details{
            margin-bottom: 5rem; width: 90%; max-width: 500px;

            @media(max-width: 768px){ 
                font-size: var(--ft-sm); margin: 7rem auto 2rem auto;
                text-align: left;
            }

            .product-title{ 
                margin-bottom: 1.5rem; color: var(--orange); 
                font-size: var(--ft-xxl); 
            }

            p{ max-width: 480px; line-height: 1.5; }
        }

        .cta-wrapper{
            ${({ theme }) => theme.flexCenter};
            .cta-button{
                ${({ theme }) => theme.CTAButton};
            }
        }
        
        
    }
`

const Hero = ({heroAsset}) => {

    const {Title, Description, Image} = heroAsset?.attributes;

    return(
        <StyledHeroSection>
            <div className='hero-inner'>

                <div className="hero-center">
                    <h2 className="large-bold-text">nike</h2>
                    <div className="hero-image-wrapper">
                        <img 
                            className="hero-image"
                            src={Image?.data?.attributes?.formats?.medium?.url}
                            alt='hero-image'
                        />
                    </div>

                </div>

                <div className="product-details">
                    <h3 className="product-title">{Title}</h3>
                    <p className="product-description">{Description}</p>
                </div>

                <div className="cta-wrapper">
                    <button className="cta-button">Buy Now</button>
                </div>
                
               
                
            </div>
            
        </StyledHeroSection>
    );
};



export default Hero;