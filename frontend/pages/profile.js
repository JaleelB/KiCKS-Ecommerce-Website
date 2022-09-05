import { useRouter } from 'next/router';
const stripe = require('stripe')(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0';
import styled from 'styled-components';
import { Layout } from "../layout";
import formatMoney from '../lib/formatMoney';

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx){
        const session = getSession(ctx.req, ctx.res);
        const stripeId = session.user[`${process.env.BASE_URL}/stripe_customer_id`];
        const paymentIntents = await stripe.paymentIntents.list({
            customer: stripeId
        })

        return { props: {orders: paymentIntents.data} };
    },
});


export default function Profile({user, orders}){
    const route = useRouter();
    console.log(orders)
    return(
        <Layout color="black">
           { user && (
                <StyledProfileWrapper>
                    <div className="profile-title-wrapper">
                        <div>
                            <h1>Profile</h1>
                            <p>{orders.length} orders</p>
                        </div>

                        <div className='customer-details'>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <div className="inner">

                        <p>Showing all orders</p>
                        
                        <StyledOrdersWrapper>
                                {
                                    orders.map(order => {
                                        return(
                                            <div className="order">
                                                <div className="square"></div>
                                                <div className='order-details'>
                                                    <p>Order Number: {order.id}</p>
                                                    <p>Order Amount: {formatMoney(order.amount)}</p>
                                                    <p>Receipt Email: {user.email}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                        </StyledOrdersWrapper>
                    </div>

                    <StyledCTAButton onClick={() => route.push('/api/auth/logout')}>Sign Out</StyledCTAButton>
                </StyledProfileWrapper>
            )}
        </Layout>
        
    )
};


const StyledProfileWrapper = styled.section`
    padding-inline: calc(20px + 1.33vh); 
    min-height: 400px; 
    
    .profile-title-wrapper{
        ${({theme}) => theme.flexSpaceBetween}

        .customer-details{
            text-align: right;
        }
    }

    .inner{
         margin-top: 20px; width: 100%; padding: 20px;
        border-radius: var(--border-radius);
        background-color: #f7f7f7; margin-top: 40px;
    }
`;

const StyledOrdersWrapper = styled.div`
    ${({theme}) => theme.flexColumn};
    row-gap: 10px; margin-top: 20px;

    .order{
        ${({theme}) => theme.flexVerticalCenter}
        border-bottom: 1px solid #eee;
        padding: 5px 0;gap: 20px;

        .order-details{
            ${({theme}) => theme.flexSpaceBetween}
            width: 100%; cursor: pointer; padding: 7px; 

            &:hover{
                background-color: #e6e6e6;
                border-radius: var(--border-radius);
                transition: all 100ms ease;
            }
        }

        .square{
            width: 15px; height: 15px; 
            border-radius: var(--border-radius);
            border: 1px solid #8e8e8e
        }

        @media (max-width: 750px){ 
            .order-details{
                ${({theme}) => theme.flexColumn}
            }
        }
    }
`;


const StyledCTAButton = styled.button`
    ${({theme}) => theme.CTAButton}
    max-width: 200px; font-size: var(--ft-sm);
    background-color: var(--black); border: none;
    bottom: 2rem; position: absolute; 
`