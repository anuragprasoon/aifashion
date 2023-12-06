const OrderForm=()=>{
    return(
        <div className="form">
            <form>
                <div className="formrow">
                    <input placeholder='First Name' type='text' className='forminpt'/>
                    <input placeholder='Last Name' type='text' className='forminpt'/>
                </div>
                <div className="formrow">
                    <input placeholder='Email Address' type='email' className='forminpt'/>
                    <input placeholder='Contact Number' type='telephone' className='forminpt'/>
                </div>
                <div className="formrow">
                    <textarea placeholder='Full address' type='text' className='formtxtarea'/>
                
                </div>
                <div className="formrow">
                    <input placeholder='text' type='text' className='forminpt'/>
                    <input placeholder='text' type='text' className='forminpt'/>
                </div>
                <div className="formrow">
                    <input placeholder='Postal/zip code' type='text' className='postalcode'/>
                    
                </div>
            </form>
        </div>
    )
}

export default OrderForm;