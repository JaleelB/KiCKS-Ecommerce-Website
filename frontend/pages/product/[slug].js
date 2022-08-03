import styled from "styled-components";
import { Layout } from "../../layout";
import { useQuery } from "urql";
import {useRouter} from "next/router";
import { GET_PRODUCT_QUERY } from "../../lib/query";

const StyledProductDetails = styled.section`
    padding: 0;
    
    .inner{
        display: flex;
        ${({ theme }) => theme.flexSpaceBetween};

        .image-container{
            width: calc(100% - 450px); min-height: 500px;
            background: #fefefe; border: 1px solid green;
        }

        .product-details-container{
            width: 450px; border: 2px solid red;
            padding: 30px;
        }
    }
`

const ProductDetails = () => {

    const {query} = useRouter();

    console.log(query);

    const [productResults] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: {slug: query.slug}
    })

    const {data, fetching, error} = productResults;

    if(fetching) return <p>Loading....</p>
    if(error) return <p>{error.message}</p>
    console.log(data)

    // const { Color, Description, Gender, Image, Price, Title}  = data.products.data.attributes;

    return (
        <Layout color={'black'}>
            <StyledProductDetails>
                <div className="inner">
                    <div className="image-container">
                        <div className="image-wrapper">
                            {/* <img src={Image.data.attributes.formats.large.url} alt="product-image" /> */}
                        </div>
                    </div>
                    
                    <div className="product-details-container">
                        <h2 className="product-title">Title</h2>
                        <p className="product-price">$350</p>
                        <p className="product-description">Description</p>
                    </div>
                </div>
            </StyledProductDetails>
        </Layout>
        
    )
}

export default ProductDetails