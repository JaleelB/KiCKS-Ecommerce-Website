
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

export const ASSETS_QUERY =  `
query{
  assets{
    data{
      attributes{
        Location
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