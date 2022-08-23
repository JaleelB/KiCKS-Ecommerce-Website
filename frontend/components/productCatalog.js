import React from 'react';
import styled from 'styled-components';
import Product from './product';

const StyledProductCatalog = styled.div`
    width: 80%; margin-inline: auto;
    padding: 30px 0; display: flex; flex-wrap: wrap;

    @media (max-width: 1125px){
        /* padding-inline: 12%; */
        ${({theme}) => theme.flexSpaceBetween}
    }
`;

const ProductCatalog = ({products, filter, filterBy}) => {

    const filteredProductsArray = products.filter((product)=> product.attributes.Gender === filter);
    console.log(filteredProductsArray)
  return (
    <StyledProductCatalog>
         {
                    filteredProductsArray.map((product, index)=>{
                        return(
                            <Product
                                key={index}
                                title={product.attributes.Title} 
                                color={'black'}
                                image={product.attributes.Image.data.attributes.formats.thumbnail.url}
                                price={product.attributes.Price}
                                gender={product.attributes.Gender}
                                slug={product.attributes.Slug}
                            />
                        )
                    })
                }
        
    </StyledProductCatalog>
  )
}

export default ProductCatalog