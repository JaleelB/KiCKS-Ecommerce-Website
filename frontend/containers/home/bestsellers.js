import styled from "styled-components";

const StyledBestSellers = styled.section`
    .inner{
        width: 90%; margin-inline: auto;

        .section-title{
            font-size: var(--ft-medium-bold); color: var(--orange);

            span{ margin-right: .5rem; color: var(--primary-white)}
        }
    }
`;

const BestSellers = () => {
  return (
    <StyledBestSellers>
        <div className="inner">
            <h3 className="section-title">
                <span className="orange-text">BEST</span>
                SELLERS
            </h3>
        </div>
        
    </StyledBestSellers>
  )
}

export default BestSellers;