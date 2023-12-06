
import Header from './components/header';
import SelectColor from './components/home/selectcolor';
import img from './main.png';
import { Link } from 'react-router-dom';
import Items from './components/order/items';
import ItemCard from './components/home/items';
const Home=()=>{
    let size,shirt,color;
    const sizeselect=(event)=>{
      console.log('size: '+event.target.value);
      size=event.target.value;
    };
    const shirtselect=(event)=>{
      console.log('shirt: '+event.target.value);
      shirt=event.target.value;
    };

    const colorselect=(event)=>{
      console.log('color: '+event.target.value);
      color=event.target.value;
    };


    return(
        <div className="App">
        <center>
        <div className="frame">
          <div className="header">
          <select className="size" id="size" onChange={sizeselect}>
            <option value="nosize">Size</option>
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="extra large">XL</option>
          </select>
            <SelectColor/>
          <select className="size" id="t-shirt"  onChange={shirtselect}>
            <option value="volvo">tshirt</option>
            <option value="saab">S</option>
            <option value="mercedes">M</option>
            <option value="audi">L</option>
            <option value="audi">XL</option>
          </select>
          </div>
          <div className="main">
          <img src={img} className="shirt" alt="logo" />
          </div>
          <div className="footer">
          <input placeholder="Enter your style prompt and let AI design your clothes..." className="inpt"></input>
          <button className="sendbtn">btn</button>
          </div>
          <div className="footer">
          <div className='price'>Rs 648.00</div>
          <button className="paydbtn">Buy Now</button>
          </div>
          
        </div>
        <h3 className='prehead'>Pre-designed</h3></center>
        <div className='prerow'>
          <ItemCard/>
          <ItemCard/>
          <ItemCard/>

        </div>

        
      </div>

    );
}

export default Home;