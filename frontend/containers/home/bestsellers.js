import styled from "styled-components";
import { Product } from "../../components";

const StyledBestSellers = styled.section`
    .inner{
        width: 90%; margin-inline: auto;

        .carousel-header{
            font-size: var(--ft-medium-bold); color: var(--orange);

            span{ margin-right: .5rem; color: var(--primary-white)}
        }

        .best-sellers-carousel{
            ${({ theme }) => theme.flexSpaceBetween};
            gap: 8px; margin-top: 2rem; overflow-x: auto;

            /* smartphones, touchscreens */
            @media (hover: none) and (pointer: coarse) {
                &::-webkit-scrollbar { display: none; }
                -ms-overflow-style: none;  scrollbar-width: none;
            }
        }
    }
`;

const BestSellers = ({products, color}) => {

  const bestSellingProducts = products.filter(product => product.attributes.Rating >= 9);

  return (
    <StyledBestSellers>
        <div className="inner">
            <h3 className="carousel-header">
                <span className="orange-text">BEST</span>
                SELLERS
            </h3>

            <div className="best-sellers-carousel">
                {
                    bestSellingProducts.map((product)=>{
                        console.log(product)
                        return (
                            <Product 
                                title={product.attributes.Title} 
                                color={color}
                                image={product.attributes.Image.data.attributes.formats.thumbnail.url}
                                price={product.attributes.Price}
                                brand={product.attributes.Brand}
                            />
                        )
                    })
                }
            </div>
        </div>
        
    </StyledBestSellers>
  )
}

export default BestSellers;