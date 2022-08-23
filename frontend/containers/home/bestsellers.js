import styled from "styled-components";
import { Product } from "../../components";

const StyledBestSellers = styled.section`
    .inner{
    
        .carousel-header{
            font-size: var(--ft-large-bold); color: var(--orange);
            margin-bottom: 1rem;

            span{ margin-right: .5rem; color: var(--primary-white)}
        }

        .best-sellers-carousel{

            display: flex;  gap: 8px;
            overflow-x: auto; overflow-y: hidden;
            /* grid-auto-flow: column;  */
            //grid-auto-columns: 25%;

            /* @media (max-width: 1024px){
                grid-auto-columns: 46%;
            } */

        }
    }
`;

const BestSellers = ({products, color}) => {

  const bestSellingProducts = products.filter(product => product.attributes.Rating >= 9.1);

  return (
    <StyledBestSellers>
        <div className="inner">
            <h3 className="carousel-header">
                <span className="orange-text">Best</span>
                Sellers
            </h3>

            <div className="best-sellers-carousel">
                {
                    bestSellingProducts.map((product, index)=>{
                        return (
                            <Product 
                                key={index}
                                title={product.attributes.Title} 
                                color={color}
                                image={product.attributes.Image.data.attributes.formats.thumbnail.url}
                                price={product.attributes.Price}
                                gender={product.attributes.Gender}
                                slug={product.attributes.Slug}
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