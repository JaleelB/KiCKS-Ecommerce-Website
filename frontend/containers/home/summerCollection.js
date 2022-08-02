import Link from "next/link";
import styled from "styled-components"

const StyledSummerCollection = styled.section`
    .inner{
        ${({ theme }) => theme.flexSpaceBetween};

        @media(max-width: 759px){ 
            ${({ theme }) => theme.flexColumn};
        }

        @media(min-width: 1200px){ 
            .collection-information{ flex: 0 0 40%; }
            .collection-banner-wrapper{ flex: 0 0 55%; }
        }

        @media(max-width: 1199px){ 
            .collection-information, .collection-banner-wrapper{ flex: 0 0 49%; }
        }

        .collection-information{
            ${({ theme }) => theme.flexColumn};
            gap: 1rem; 

            .title{
                font-size: var( --ft-large-bold); 
                /* max-width: 450px; */
                

                .orange-text{
                    color: var(--orange); margin-left: .5rem;
                }
            }

            .collection-description{
                line-height: 1.5; max-width: 450px;
                @media(max-width: 1199px){ 
                    max-width: none; width: 100%;
                }
                
            }

            .cta-btn{
                ${({ theme }) => theme.CTAButton};
                max-width: 350px; 
                
                @media(min-width: 1200px){ 
                    margin-top: auto;
                }
                 
                @media(max-width: 759px){ width: 100%; margin-bottom: 1rem; }
            }
        }

        .collection-banner-wrapper{
            width: 100%;

            img{
                inline-size: 100%; object-fit: contain;
                height: 100%;
            }
        }
    }
`;

const SummerCollection = () => {
  return (
      <StyledSummerCollection>
        <div className="inner">
          
            <div className="collection-information">
                    <h2 className="title">
                        Summer Collections
                        <span className="orange-text">2022</span>
                    </h2>

                <p className="collection-description">
                        What better way is there to kick of the summer than hanging 
                        out with your friends while wearing some fresh kicks.
                        
                        Check out the summer collection for your summer activities and elevate your game
                </p>

                <Link href='summer-collection-2022'>
                    <button className="cta-btn">Shop Collection</button>
                </Link>
                
            </div>

            <div className="collection-banner-wrapper">
                  <img 
                    src={`https://images.pexels.com/photos/5325589/pexels-photo-5325589.jpeg?cs=srgb&dl=pexels-anna-shvets-5325589.jpg&fm=jpg`}
                    alt="" 
                    className="collection-banner"
                  />
            </div>
        </div>
      </StyledSummerCollection>
      
  )
}

export default SummerCollection;