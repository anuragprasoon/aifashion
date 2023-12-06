import Items from "./items";

const Cart=()=>{
    return(
<div className="cart">
    <h3 className="carttitle">Order Summary</h3>
    <div className="itemhead">
    <span className="underline">Items:</span> <span  className="marginleft">amount:</span>
    </div>
    <Items/>
    <Items/>
    <Items/>
    <Items/>
    <hr/>
    <div className="totalcart">
    <span className="total">Order Total</span>
    <span className="totalprice">Rs 2082.60</span>
    </div>
</div>
    );
}

export default Cart;