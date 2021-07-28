import React from 'react'
import './checkout.css'
import SubTotal from '../subtotal/SubTotal'
import { useStateValue } from '../../State/StateProvider'
import CheckOutProduct from './CheckOutProduct'


const CheckOut = () => {
  const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkOut__left'>

    <img className='checkout-ad' src='https://m.media-amazon.com/images/S/abs-image-upload-na/c/AmazonStores/ATVPDKIKX0DER/46ce39b478a48bc311d9ebcceaab26f2.w1500.h400._CR0%2C0%2C1500%2C400_SX1500_.jpg' alt=''/>
    <div>
    <h3>hello {user?.email}</h3>
    <h2 className='checkout__title'>

      Your shopping Basket
    </h2>
    <h2>
      {basket.map(item => (
        <CheckOutProduct
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating}
         />
      ))}
    </h2>
    </div>
      </div>
      <div className='checkout__right'>
      <h2>Subtitle will go here</h2>
      <SubTotal />
      </div>

    </div>
  )
}

export default CheckOut
