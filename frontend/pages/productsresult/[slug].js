import { Layout } from "../../layout"
import styled from "styled-components";
import { ChevronDown } from "react-bootstrap-icons";
import { ProductCatalog } from "../../components";
import { useQuery } from 'urql';
import { PRODUCT_QUERY } from '../../lib/query';
import { useState } from "react";
import { useRouter } from 'next/router';

const StyledMensPage = styled.section`
  .inner{
    width: 100%;
    .title{
      text-transform: uppercase;
       margin-bottom: 2rem; padding-left: 10%; 
       @media(max-width: 950px){ text-align: center; padding: 0; }
      }
  }
`;

const StyledMensPageBanner = styled.div`
  width: 100%; max-height: 650px; position: relative;

  h1{ 
    position: absolute; top: 50%; left: 50%; z-index: 1;
    transform: translate(-50%, -50%); color: var(--primary-white);
    font-size: var(--ft-medium-bold); font-weight: 500;
    @media(min-width: 1600px){font-size: 50px; }
    
  } 

  img{
    inline-size: 100%; object-fit: cover; 
    height: 100%;max-height: 650px;
    filter: brightness(80%);
  }
`;

const StyledFilterBar = styled.div`
  list-style: none; padding: 20px 10%;
  border-top: 2px solid var(--primary-black);
  border-bottom: 2px solid var(--primary-black);
  flex-wrap: wrap;

  ${({theme}) => theme.flexSpaceBetween}

  @media(max-width: 480px){ padding-inline: 1rem; }

  .product-types{
    span{ 
      padding: .8rem 1rem; cursor: pointer;
      @media(max-width: 480px){ padding-inline: .6rem; }
    }
  }

  .filter-dropdown{
    position: relative; display: inline-block;

    span{
      padding: .6rem 1rem; 
      cursor: pointer;

      &.dropdown-btn{
        border: 1px solid var(--primary-black);
        .icon{
          margin-left: 8px; position: relative; top: 5px;
          
        }
      }
    }

    .dropdown-content{
      ${({theme}) => theme.flexColumn}
      /* display: flex; flex-wrap: wrap; */
      position: absolute; margin-top: 10px;
      /* display: ${props => props.isdown || "none"}; */
      background-color: #f9f9f9; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      min-width: 160px; z-index: 1;

      div{
        padding: 10px;
        &:hover{ background-color: #f1f1f1; }
      }
    }
  }
`

const ProductsResult = () => {

  const filterOptions = ['Discover', 'Latest', 'Sale'];
  const sortByOptions = ['Lowest Price', 'Highest Price'];
  const [productResults] = useQuery({query: PRODUCT_QUERY});
  const [filterBy, setFilterBy] = useState('');
  const [dropDown, setDropDown] = useState(false);

  const {query} = useRouter();

  const {data, fetching, error} = productResults;
  if(fetching) return <p>Loading....</p>
  if(error) return <p>{error.message}</p>

  return (
    <Layout color="black">
      <StyledMensPageBanner>
          {
            query.slug === 'men' ? (
              <>
                <h1>Men's Shoes & Sneakers</h1>
                <img src="https://images.pexels.com/photos/7776154/pexels-photo-7776154.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7776154.jpg&fm=jpg" alt="" />
              </>
            )
            :
            query.slug === 'women' ? (
              <>
                <h1>Women's Shoes & Sneakers</h1>
                <img src="https://images.pexels.com/photos/6311675/pexels-photo-6311675.jpeg?cs=srgb&dl=pexels-monstera-6311675.jpg&fm=jpg" alt="" />
              </>
            )

            :
            (
              <>
                <h1>Kid's Shoes & Sneakers</h1>
                <img src="https://images.pexels.com/photos/7776154/pexels-photo-7776154.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7776154.jpg&fm=jpg" alt="" />
              </>
            )
          }
      </StyledMensPageBanner>

      <StyledMensPage>
        
        <div className="inner">
          <h2 className="title">SHOP ALL {query.slug}'S STYLES</h2>

          <div className="product-catalog">
            <StyledFilterBar>
              <div className="product-types">
                {
                    filterOptions.map((option, index) => {
                        return (
                          <span key={index}>{option}</span>
                        )
                    })
                }
              </div>

              <div className="filter-dropdown">
                <span className="dropdown-btn" onClick={()=> setDropDown(!dropDown)}>
                  Sort by
                  <ChevronDown className="icon"/>
                </span>

                <div className="dropdown-content" style={{display: dropDown ? 'block' : 'none'}}>
                  {
                      sortByOptions.map((option, index)=>{
                          return (
                            <div key={index} >{option}</div>
                          )
                      })
                  }
                </div>
                
              </div>
            </StyledFilterBar>


            <ProductCatalog 
              products={data.products.data} 
              filter={
                query.slug  === 'men' ? "Men":
                query.slug  === 'women' ? "Women":
                'Kid'
              } 
              filterBy='discover'
            />

          </div>
        </div>
      </StyledMensPage>
    </Layout>
  )
}

export default ProductsResult;