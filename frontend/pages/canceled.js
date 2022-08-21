import React from 'react';
import styled from 'styled-components';
import { Layout } from '../layout';
import {useRouter} from 'next/router';

const StyledCanceledPage = styled.section`
    height: 100vh;
    ${({theme}) => theme.flexCenter}
`;

const StyledOrderCancelWrapper = styled.div`
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
            line-height: 200px; 
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

const Canceled = () => {

    const route = useRouter();

    return (
        <Layout color='black'>
            <StyledCanceledPage>
                <div className="inner">
                    <StyledOrderCancelWrapper>
                        <div className="background">
                            <i class="checkmark">!</i>
                        </div>

                        <h1>Failed</h1>

                        <h2 className='error-message'>Whoops! Something went wrong with your order.</h2>
                        <h2 className='cancel-message'>It seems your order was cancelled or your payment wasn't completed.</h2>

                        <CTAButton className="continue-shopping" onClick={() => route.push('/cart')}>Please Try Again</CTAButton>
                    </StyledOrderCancelWrapper>
                </div>
            </StyledCanceledPage>
        </Layout>
    )
}

export default Canceled;