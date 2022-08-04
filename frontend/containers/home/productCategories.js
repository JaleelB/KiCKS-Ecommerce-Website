import Link from "next/link";
import styled from "styled-components"

const StyledProductCategories = styled.section`

    padding: 40px 0;

    .inner{
        display: flex; flex-flow: row;

        @media(max-width: 540px){
            ${({ theme }) => theme.flexColumn};
        }
    }
`;

const StyledCategoryLinks = styled.a`
    display: flex; position: relative;
    width: 50%; height: 100%; 

    @media(max-width: 960px){
        ${({ theme }) => theme.flexColumn}; width: 100%;
    }
    
    .background{
         width: 100%;  flex: 1.3344;

        .background-image{
            inline-size: 100%; object-fit: contain; 
            height: auto; vertical-align: middle;
        }

    }

    .cta-wrapper{
        position: absolute; bottom: 1rem;
        left: 50%; transform: translate(-50%);

        .cta-btn{
            ${({ theme }) => theme.CTAButton};
            text-transform: uppercase;
        }
    }
`;

const ProductCategories = () => {

    const categoryImages = [
        {
            category: 'men',
            url: 'https://images.pexels.com/photos/7776154/pexels-photo-7776154.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7776154.jpg&fm=jpg'
        },
        {
            category: 'women',
            url: 'https://images.pexels.com/photos/6311675/pexels-photo-6311675.jpeg?cs=srgb&dl=pexels-monstera-6311675.jpg&fm=jpg'
        }
    
    ]

  return (
    <StyledProductCategories>
        <div className="inner">
            {
                categoryImages.map((category, index)=>{
                    return (
                        <StyledCategoryLinks key={index}>
                            <div className="background">
                                <img className="background-image" src={category.url} alt="" />
                            </div>

                            <div className="cta-wrapper">
                                <Link href={`/${category.category}`}>
                                    <button className="cta-btn">
                                        {category.category}
                                    </button>
                                </Link>
                            </div>
                        </StyledCategoryLinks>
                    )
                })
            }
            
        </div>
    </StyledProductCategories>
  )
}

export default ProductCategories
