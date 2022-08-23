import styled from "styled-components";

const StyledProductCard = styled.a`

    --card-margin: .5rem; 
    
    @media(max-width: 539px){--products-in-view: 1;}
    @media(min-width: 540px ) and (max-width: 960px){--products-in-view: 2;}
    @media(min-width: 961px) {--products-in-view: 3;}
    /* @media(min-width: 1921px){--products-in-view: 4;} */

    flex: 0 0 calc((100% / calc(var(--products-in-view)) - 10px));  
    position: relative; aspect-ratio: 1; margin-inline: 5px;
    /* min-width: 200px; min-height:200px;  */
    max-width: calc((100% / calc(var(--products-in-view)) - 10px));  
    margin-bottom: 4.5rem; text-decoration: none;


    @media (max-width: 1024px){
        margin-bottom: 5.5rem;
    }

    .product-inner{
        width: 100%; height: 100%;

        .image-wrapper{
            width: 100%; height: 100%; padding: var(--card-margin);
            ${({ theme }) => theme.flexCenter}

            img{
                inline-size: 90%; object-fit: contain; margin-inline: auto;
            }
        }

        .product-information{
            margin-top: 1rem; padding: var(--card-margin);
            ${({ theme }) => theme.flexSpaceBetween} margin-top: auto;
            
            @media (max-width: 1023px){
                ${({ theme }) => theme.flexColumn}
                gap: 8px;
            }

            .product-title{ color: var(--orange); margin: .4rem 0; max-width: 200px;}
                    
        }
    }

`;

const Product = (props) => {

  return (
    <StyledProductCard 
        href={`/product/${props.slug}`}
        style={{color: props.color}}
    >
        <div className="product-inner">
            <div className="image-wrapper">
                <img src={props.image} alt="product-image"/>
            </div>
            <div className="product-information">
                <div>
                    <h3 className="product-title">{props.title}</h3>
                    <p className="product-gender-type">
                        <span>{props.gender}</span>
                        's Shoes
                    </p>
                </div>
                
                <p className="product-price">${props.price}</p>
            </div>
            
        </div>
        
    </StyledProductCard>
  )
}

export default Product;