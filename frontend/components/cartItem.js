import styled from "styled-components";
import * as Icon from 'react-bootstrap-icons';
import { useState } from "react";

const StyledCartItem = styled.div`
    width: 100%; padding: .5rem; font-size: var(--ft-md);

    .item-inner{
        ${({ theme }) => theme.flexSpaceBetween};
        gap: 1.5rem; color: var(--grey);
        
        .item-image-wrapper{
            .item-image{
                min-width: 7rem; min-height: 7rem;
                max-width: 12rem; max-height: 12rem; 

                img{
                    inline-size: 100%; object-fit: contain;
                }
            }
        }

        .item-details{
            width: 100%; 

            .pricing-group{
                ${({ theme }) => theme.flexSpaceBetween};
                color: var(--black); margin-bottom: 1rem;

                p{ 
                    font-weight: 500; line-height: 1.4; font-size: var(--ft-md);
                    @media(min-width: 1200px){ font-size: var(--ft-lg); } 
                }
               
            }

            .align-left{
                display: flex; gap: .7rem; 

                & > * {
                    display: flex; gap: .1rem;
                }
            }

            .item-actions{
                margin-top: .5rem;
                ${({ theme }) => theme.flexSpaceBetween};
                .quantity-select{
                    display: flex; gap: .5rem;
                }
                .icon{ color: var(--black)}
            }
        }
        
    }
    
`

const CartItem = (props) => {

    const [qty, setQty] = useState(1);

    const increaseQty = () => setQty((prevQty)=> (prevQty + 1));
    const decreaseQty = () => setQty((prevQty)=> (prevQty > 1 ? prevQty + 1 : 1))

    return (
        <StyledCartItem>
            <div className="item-inner">
                <div className="item-image-wrapper">
                    <div className="item-image"><img src={props.image} alt="" /></div>
                </div>

                <div className="item-details">
                    <div className="pricing-group">
                        <p className="item-name">{props.title}</p>
                        <p className="item-price">${props.price}</p>
                    </div>

                    <div className="item-gender-details">{props.gender}'s Shoes</div>

                    <div className="align-left">
                    <div className="item-color">
                            Color:
                            <p className="color">{props.color}</p>
                        </div>

                        <div className="item-size">
                            Size: 
                            <p className="size">{props.size}</p>
                        </div> 
                    </div>
                    

                    <div className="item-actions">
                        <div className="quantity-select icon">
                            <Icon.DashCircleFill onClick={decreaseQty}/>
                            <p className="quantity icon">{qty}</p>
                            <Icon.PlusCircleFill onClick={increaseQty}/>
                        </div>
                        <div className="remove-item icon"><Icon.Trash3/></div>
                    </div>
                </div>
            </div>
            
        </StyledCartItem>
    )
}

export default CartItem;