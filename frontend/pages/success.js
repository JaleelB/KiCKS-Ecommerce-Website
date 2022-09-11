import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import { Layout } from '../layout';
import formatMoney from '../lib/formatMoney';
import { useCartContext } from "../context/CartContext";


const StyledSuccessPage = styled.section`
    width: 100vw; min-height: 100vh;
    ${({theme}) => theme.flexVerticalCenter}
    
    .inner{
        width: 90%; min-height: 100%;
        /* ${({theme}) => theme.flexCenter} */
    }

`;

const StyledOrderDetailsWrapper = styled.div`
    width: 100%; max-width: 1000px;
    margin-inline: auto;
    border-radius: var(--border-radius);
    ${({theme}) => theme.flexColumn}
    text-align: center; gap: 10px;
    box-shadow: 0px 15px 30px rgba(50, 50, 50, 0.21);
    padding: 40px;

    .background{
        height:200px; width:200px; 
        background: #f7dcd4; margin:0 auto; 
        border-radius:200px; 
        
        i {
            color: var(--orange);font-size: 100px;
            line-height: 200px; margin-left:-15px;
        }
    }

    h2{
        font-weight: 600; font-size: var(--ft-xxl);
        @media (max-width: 750px){ font-size: var(--ft-md) }
    }
    h1{ 
        font-weight: 500; font-size: var(--ft-xxl); 
        color: var(--orange); margin-bottom: 1rem;  
    }
    h3{font-weight: 700; font-size: var(--ft-lg)}

    .congrats-message{
        font-size: var(--ft-medium-bold);
        @media (max-width: 750px){ margin-bottom: 20px;}
    }
    

    .columns-wrapper{
        ${({theme}) => theme.flexSpaceBetween}
        flex-wrap: wrap; margin-inline: auto; 
        max-width: 500px; text-align: left;
        width: 65%;  margin-top: 3rem;
        @media (max-width: 750px){
            flex-direction: column; max-width: none;
            margin-inline: 1rem; margin-top: 2rem;
            gap: 30px; width: 100%
        }

        .order-products{
            div{
                margin: 15px 0;
                @media (max-width: 750px){  margin: 20px 0; }
            }
        }

        h3{ margin-bottom: .5rem;}
        p{ text-transform: capitalize; margin-bottom: .2rem; }
    }
`;

const CTAButton = styled.button`
    ${({theme}) => theme.CTAButton}
    max-width: 500px; margin-inline: auto;
    margin-top: 2rem;
`

const stripe = require('stripe')(
    `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`
)
export async function getServerSideProps(params){
    const order = await stripe.checkout.sessions.retrieve(
        params.query.session_id,
        {expand: ['line_items']}
    )

    return { props: {order}};
}

const Success = ({order}) => {

    const route = useRouter();
    const { setCheckoutSuccess } = useCartContext();
    useEffect(()=>{
        setCheckoutSuccess(true);
    })

    return (
        <Layout color="black">
            <StyledSuccessPage>
                <div className="inner">

                    <StyledOrderDetailsWrapper>
                        <div className="background">
                            <i class="checkmark">✓</i>
                        </div>
                        <h1>Awesome!</h1>

                        <h2 className='congrats-message'>Congratulations. Your order has been accepted.</h2>
                        <h2 className='confirmation-message'>A confirmation email has been sent to <span>{order.customer_details.email}</span></h2>

                        <h2>Here is your order summary.</h2>

                        <div className="columns-wrapper">
                            <div className="address-wrapper">
                                <h3>Address</h3>
                                <div className="address-details">
                                    {Object.entries(order.customer_details.address).map(([key, value]) => (
                                        <p key={key}>
                                            {key} : {value}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="order-details-wrapper">
                                <h3>Products</h3>
                                <div className="order-products">
                                    {
                                        order.line_items.data.map((product) => {
                                            return(
                                                <div key={product.id}>
                                                    <p>Product: {product.description}</p>
                                                    <p>Quantity: {product.quantity}</p>
                                                    <p>Price: {formatMoney(product.price.unit_amount)}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                        <CTAButton className="continue-shopping" onClick={() => route.push('/')}>Continue Shopping</CTAButton>
                    </StyledOrderDetailsWrapper>
                </div>
            </StyledSuccessPage>
        </Layout>
    )
}

export default Success;