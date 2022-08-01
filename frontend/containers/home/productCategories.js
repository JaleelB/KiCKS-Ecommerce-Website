import Link from "next/link";
import styled from "styled-components"

const StyledProductCategories = styled.section`
    .categories-inner{
        width: 90%; margin-inline: auto; 
        display: flex;

        @media(max-width: 540px){
            ${({ theme }) => theme.flexColumn};
        }
    }
`;

const StyledCategoryLinks = styled.a`
    display: flex; position: relative;
    width: (100% / 2); height: 100%; 

    @media(max-width: 960px){
        ${({ theme }) => theme.flexColumn}; width: 100%;
    }
    
    .background{
        height: 100%; width: 100%;

        .background-image{
            inline-size: 100%; object-fit: contain;
        }

    }

    .cta-wrapper{
        position: absolute; bottom: 1rem;
        left: 50%; transform: translate(-50%);

        .cta-btn{
            ${({ theme }) => theme.CTAButton};
            
        }
    }
`;

const ProductCategories = () => {

    const categoryImages = [
        {
            category: 'MEN',
            url: 'https://images.pexels.com/photos/7776154/pexels-photo-7776154.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-7776154.jpg&fm=jpg'
        },
        {
            category: 'WOMEN',
            url: 'https://images.pexels.com/photos/6311675/pexels-photo-6311675.jpeg?cs=srgb&dl=pexels-monstera-6311675.jpg&fm=jpg'
        }
    
    ]

  return (
    <StyledProductCategories>
        <div className="categories-inner">
            {
                categoryImages.map((category)=>{
                    return (
                        <StyledCategoryLinks>
                            <div className="background">
                                <img className="background-image" src={category.url} alt="" />
                            </div>

                            <div className="cta-wrapper">
                                <Link href={`/category.category`}>
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
