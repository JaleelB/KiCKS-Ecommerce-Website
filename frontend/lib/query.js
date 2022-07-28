
export const PRODUCT_QUERY = `
query{
    products{
      data{
        attributes{
          Title
          Description
          Price
          Slug
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

export const HOME_ASSETS_QUERY =  `
  query{
    assets{
      data{
          attributes{
            Title
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
`