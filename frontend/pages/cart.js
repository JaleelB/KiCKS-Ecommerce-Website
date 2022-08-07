import styled from "styled-components"
import { CartItem } from "../components";
import { Layout } from "../layout";

const StyledCart = styled.section`

    
    
    .inner{
        height: 100%; 
        /* @media(max-width:1023px){ height:500px; } */

        h1{ font-weight: 500; margin-bottom: 1.5rem; }
        
        .cart-wrapper{
            width: 100%; min-height: 500px;
            ${({ theme }) => theme.flexSpaceBetween};
            @media (max-width:1023px){
                ${({ theme }) => theme.flexColumn};
                justify-content: space-between;
            }

            .order-products-information{
                width: 49%;
                /* border: 1px solid red; */

                @media (max-width:1023px){
                    height: 49%; width: 100%;
                }
            }

            .order-summary{
                width: 350px;
                @media (max-width:1023px){
                    padding-top:50px;
                    width: 100%;  height: 49%; 
                }
                /* border: 1px solid green; */

                .order-summary-header{
                    font-weight: 500; margin-bottom: 1.5rem;
                }

                .promo-code-question{ margin-bottom: 1rem; font-weight: 500; }

                .fees-wrapper{
                    .fee{
                        ${({ theme }) => theme.flexSpaceBetween};
                        padding: 5px 0;

                        &.total{
                            border-top: 1px solid var(--black);
                            border-bottom: 1px solid var(--black);
                            margin: 2rem 0;
                        }
                    }
                }

                .billing-cta-wrapper{
                    ${({ theme }) => theme.flexColumn};
                    gap: 5px;

                    .cta-btn{
                        ${({ theme }) => theme.CTAButton};
                        width: 100%;

                        @media(min-width:750px){ margin-inline: auto; }

                        &.checkout{ background-color: var(--black); border: var(--black) }
                        &.apple-pay, &.paypal{ 
                            background-color: #D9D9D9; border: #D9D9D9;
                            color: var(--black)
                        }
                    }
                }
            }
        }
    }

`;

const Cart = () => {

    const feesTitles = ['Subtotal', 'Estimated Shipping & Handling', 'Estimated Tax', 'Discount', 'Total']

  return (
    <Layout color="black">
        <StyledCart>
            <div className="inner">
                <h1 className="page-title">Shopping Cart</h1>

                <div className="cart-wrapper">
                    <div className="order-products-information">
                        
                        <p className="null-message">
                            You have no items in your bag
                        </p>

                        <CartItem/>
                    </div>

                    <div className="order-summary">
                        <h2 className="order-summary-header">Order Summary</h2>

                        <div className="order-pricing-wrapper">
                            <h3 className="promo-code-question">
                                Do you have a promo code?
                            </h3>

                            <div className="fees-wrapper">
                                {

                                    feesTitles.map((title) => {
                                        return (
                                            <div 
                                                
                                                className={
                                                    `
                                                    fee 
                                                    ${
                                                        title==="Subtotal" ? 'subtotal':
                                                        title === "Estimated Shipping & Handling" ? "shipping":
                                                        title === "Estimated Tax" ? "tax":
                                                        title === "Discount" ? "discount":
                                                        "total"
                                                    }
                                                    `
                                                    
                                                }
                                            >
                                                <p className="title">{title}</p>
                                                <p className="price">$0.00</p>
                                            </div> 
                                        )
                                    })
                                   
                                }
                                
                            </div>


                            <div className="billing-cta-wrapper">
                                <button className="cta-btn checkout">Checkout</button>
                                <button className="cta-btn paypal">Paypal</button>
                                <button className="cta-btn apple-pay">Apple Pay</button>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </StyledCart>
        
    </Layout>
  )
}

export default Cart;