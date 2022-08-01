import styled from "styled-components";

const StyledProductCard = styled.div`

    --card-margin: .5rem;

    @media(max-width: 960px){--products-in-view: 2;}
    @media(min-width: 961px) and (max-width: 1920px){--products-in-view: 3;}
    @media(min-width: 1921px){--products-in-view: 4.05;}

    flex: 0 0 calc(100% / var(--products-in-view) );  max-width: calc(100% / var(--products-in-view));  
    border: 2px solid var(--primary-white); padding: var(--card-margin);
    ${({ theme }) => theme.flexColumn}

    .product-inner{
        width: 100%; height: 100%;

        .image-wrapper{
            height: 70%; padding: var(--card-margin);
            ${({ theme }) => theme.flexCenter}

            img{
                inline-size: 100%; object-fit: contain;
            }
        }

        .product-information{
            margin-top: auto; padding: var(--card-margin);
            ${({ theme }) => theme.flexColumn}
            gap: 5px;

            .product-brand{ text-transform: uppercase; }
            .product-title{ color: var(--orange) }
                    
        }
    }

`;

const Product = (props) => {
  return (
    <StyledProductCard>
        <div className="product-inner">
            <div className="image-wrapper">
                <img src={props.image} alt="product-image"/>
            </div>
            <div className="product-information">
                <p className="product-brand">{props.brand}</p>
                <h3 className="product-title">{props.title}</h3>
                <p className="product-price">${props.price}</p>
            </div>
            
        </div>
        
    </StyledProductCard>
  )
}

export default Product;