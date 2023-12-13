import {MdClose} from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import "./CartItem.scss";
import { Context } from "../../../utils/context";
import "./CartItem.scss";
import { useContext } from "react";

const CartItem = () => {
    const {cartItems,handleCartProductQuantity,handleRemoveFromCart} = useContext(Context);

    return (
        <div className="cart-products">
            {cartItems.map(item=>(
                <div key={item.id} className="cart-product">
                    <div className="image-container">
                        <img src = {prod} alt = ""/>
                    </div>

                    <div className="prod-details">
                        <span className="name">{item.attributes.title}</span>
                        <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)}/>
                        <div className="quantity-buttons">
                            <span onClick={()=>handleCartProductQuantity('desc',item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={()=>handleCartProductQuantity('desc',item)}>+</span>
                        </div>
                        <div className="text"> 
                            <span>{item.attributes.quantity}</span>
                            <span>x</span>
                            <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
