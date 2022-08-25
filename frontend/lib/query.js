
export const PRODUCT_QUERY = `
query{
    products{
      data{
        attributes{
          Title
          Description
          Price
          Slug
          Gender
          Color
          Rating
          Image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_QUERY =  `
  query getPtoducts($slug: String!){
    products(filters: {Slug: {eq: $slug}}, pagination: { limit: 100 }){
      data{
        attributes{
          Color
          Title
          Description
          Price
          Slug
          Gender
          Color
          Rating
          Image{
            data{
              attributes{
                formats
              }
            }
          }
        }
      }
    }
  }
`;