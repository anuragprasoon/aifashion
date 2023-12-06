import Address from "./components/order/addressselect";
import OrderForm from "./components/order/form";
import Cart from "./components/order/ordercart";
import Pay from "./components/order/paybtn";

const OrderPage2=()=>{
    return(
<>
<Address/>
<Address/>
<div className="rowtitle"><h2 className="pagetitle">Enter Details and Order Summary</h2></div>

<center>
<div className="rowsec">
<div className="colsec"><OrderForm/></div>
<div className="colsec">
<Cart/>
<Pay/>
</div>


</div>
</center>

</>
    );
}

export default OrderPage2;