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
                payment_method_types: ['card'],
                shipping_address_collection: {
                    
                    allowed_countries: ['US', 'CA']
                },
                line_items: request.body.map(product => {
                    
                    return {
                        price_data: {
                            country: 'usd',
                            product_data: {
                                name: product.title,
                                images: [product.image]
                            },
                            unit_amount: product.price * 100,
                        }, 
                        quantity: product.quantity
                    }
                }),

                //redirect people to success/fail page
                success_url: `${request.headers.origin}/success`,
                cancel_url: `${request.headers.origin}/canceled`,
            })

            //returns stripe session on successful payment
            response.staus(200).json(session)
        }catch(error){
            response.status(error.statusCode || 500).json(error.message)
        }
    }
}