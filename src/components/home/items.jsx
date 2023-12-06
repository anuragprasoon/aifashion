import img from '../../main.png';
const ItemCard=()=>{
    return (
        <div className='itemcard'>
        <img src={img} className='thumb' alt='thumb'/><br/>
        <button className='itembuy'>Buy Now</button>
      </div>
    )
}

export default ItemCard;