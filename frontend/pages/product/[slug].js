import styled from "styled-components";
import { Layout } from "../../layout";
import { useQuery } from "urql";
import {useRouter} from "next/router";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledProductDetails = styled.section`
    padding: 0;

    .inner{
        display: flex; max-width: 1440px;
        ${({ theme }) => theme.flexSpaceBetween};

        @media(max-width: 969px){
            ${({ theme }) => theme.flexColumn};
        }

        .image-container{
            width: calc(100% - 450px);background: #fefefe; 
            /* @media(min-width: 480px){ min-height: 470px; } */
             
            
            @media(max-width: 969px){ width: 100%; margin-bottom: 2rem; }   

            .image-wrapper{
                width: 90%; height: 100%; margin-inline: auto;

                .product-image-large{
                    inline-size: 100%; object-fit: contain;
                    aspect-ratio: 1; height: calc(97% - 155px);
                }

                .product-preview{
                    max-width: 100px; max-height: 100px;
                    @media(max-width: 1023px){ display: none;}
                    
                    img{
                        inline-size: 100%; object-fit: contain; 
                        height: 100%; padding-inline: 5px;
                        border: 2px solid var(--black);
                        border-radius: var(--border-radius);
                    }
                }

            }
        }

        .product-details-container{
            width: 450px; padding: 0 30px;

            @media(max-width: 969px){ width: 100% }   

            .product-title{ font-weight: 550; }
            .product-gender{ font-weight: 500; margin-bottom: 2rem; }

            .thumbnail-wrapper{
                width: 70px; height: 70px;
                margin: 1rem 0; 

                img{
                    inline-size: 100%; object-fit: contain; 
                    height: 100%; padding-inline: 5px;
                    border: 2px solid var(--black); border-radius:  var(--border-radius);
                }
            }

            .color-details{
                margin-bottom: 1rem;
                .color-header{ font-weight: 500; }
            }

            .size-selection-wrapper{
                margin: 2rem 0;
                .size-section-header{ margin-bottom: .4rem; font-weight: 500; }
                .size-list{
                    list-style: none; padding: 0;
                    display: flex; flex-wrap: wrap;
                    gap: 5px; 

                    .size-item{
                        flex: 0 0 calc(33% - 5px); background-color: #e6e6e6;
                        text-align: center; padding: 1rem 0; border-radius: var(--border-radius);

                        &.selected{ 
                            outline: 2px solid var(--black); 
                        }

                        &:hover{ 
                            outline: 2px solid var(--black);
                            transition: 50ms ease-in;
                        }
                    }
                }
            }

            .product-overview{
                .overview-header{ margin-bottom: .4rem; font-weight: 500;}
                line-height: 1.5;
            }

            .cta-wrapper{
                margin: 2rem 0;
                

                .cta-btn{
                    ${({ theme }) => theme.CTAButton};
                    background-color: var(--black); border: none;
                    width: 100%;

                    @media(max-width: 969px){ max-width: none; }

                 }

                 .Toastify{
                     .Toastify__toast-container{
                        @media(max-width: 480px){ 
                            top: 1rem; width: 95vw; margin-inline: .5rem; 
                        }
                     }
                 }
            }
        }
    }
`

const ProductDetails = () => {

    const {query} = useRouter();

    const [selectedSize, setSelectedSize] = useState(null); 

    const [productResults] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: {slug: query.slug}
    })

    const {data, fetching, error} = productResults;
    
    const sizes = [
        6.5, 7, 7.5, 8, 8.5, 9, 9.5,10, 10.5, 
        11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 
        15, 15.5, 16.5, 17
    ];

    const { dispatch } = useCartContext();

    if(fetching) return <p>Loading....</p>
    if(error) return <p>{error.message}</p>

    const { Color, Description, Gender, Image, Price, Title, Slug}  = data.products.data[0].attributes;

    const addToCartNotification = () => toast('Item added to cart')

    return (
        <Layout color={'black'}>
            <StyledProductDetails>
                <div className="inner">
                    <div className="image-container">
                        <div className="image-wrapper">
                            <img 
                                src={
                                    Image.data.attributes.formats.medium ? 
                                    Image.data.attributes.formats.medium?.url :
                                    Image.data.attributes.formats.small?.url
                                } 
                                className="product-image-large" 
                                alt="product-image" 
                            />
                            <div className="product-preview">
                                <img src={Image.data.attributes.formats.thumbnail.url} alt="product-image" />
                            </div>
                                
                        </div>
                    </div>
                    
                    <div className="product-details-container">
                        <h2 className="product-title">{Title}</h2>
                        <p className="product-gender">{Gender}'s Shoes</p>
                        <p className="product-price">${Price}</p>
                            
                        <div className="thumbnail-wrapper">
                            <img src={Image.data.attributes.formats.thumbnail.url} alt="product-thmbnail" />
                        </div>

                        <div className="color-details">
                            <p className="color-header">Color:</p>
                            <p className="color">{Color}</p>
                        </div>

                        <div className="size-selection-wrapper">
                            <p className="size-section-header">Select Size:</p>
                            <ul className="size-list">
                                {
                                    sizes.map((size)=>{
                                        return (
                                            <li 
                                                key={uuidv4()} 
                                                className={`size-item ${size === selectedSize ? "selected" : ""}`}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="product-overview">
                            <p className="overview-header">Product Overview:</p>
                            <p className="product-description">{Description}</p>
                        </div>


                        <div className="cta-wrapper">
                            <button 
                                className="cta-btn"
                                onClick={()=>{
                                    dispatch( {
                                        type: 'add-item-to-cart', payload: {
                                            size: selectedSize,
                                            color: Color, 
                                            gender: Gender, 
                                            image: Image.data.attributes.formats.thumbnail.url, 
                                            price: Price, 
                                            title: Title,
                                            id: uuidv4(),
                                            slug: Slug,
                                            quantity: 1
                                        }
                                    })
                                    addToCartNotification();
                                }}
                            >
                                Add To Cart
                            </button>
                            <ToastContainer />
                        </div>
                        
                    </div>
                </div>
            </StyledProductDetails>
        </Layout>
        
    )
}

export default ProductDetails