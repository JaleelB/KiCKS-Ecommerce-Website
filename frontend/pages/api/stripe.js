import { Profiler } from 'react';
import Stripe from 'stripe';
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function handler(request, response){
    if(request.method === "POST"){
        try{
            //create checkput session
            const session = await stripe.checkout.sessions.create({
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card', 'klarna'],
                shipping_address_collection: {
                    
                    allowed_countries: ['US', 'CA']
                },
                allow_promotion_codes: true,

                shipping_options: [
                    {shipping_rate: 'shr_1LVo7fCBJx4bJphGaufId4iw'},
                    {shipping_rate: 'shr_1LVoC1CBJx4bJphG2lP2sKB5'}
                ],
                line_items: request.body.map(product => {
                    
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: product.title,
                                images: [product.image]
                            },
                            unit_amount: product.price * 100,
                        }, 
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                            maximum: 6
                        },
                        quantity: product.quantity
                    }
                }),

                //redirect people to success/fail page
                success_url: `${request.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${request.headers.origin}/canceled`,
            })

            //returns stripe session on successful payment
            response.status(200).json(session)
        }catch(error){
            response.status(error.statusCode || 500).json(error.message)
        }
    }
}