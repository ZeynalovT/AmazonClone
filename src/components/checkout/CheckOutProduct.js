import React from 'react'
import './checkoutproduct.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../../State/StateProvider'

const CheckOutProduct = ({id, title, price, image, rating}) => {
  const [{basket}, dispatch] = useStateValue()

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    })
  }


  return (
    <div className='checkOutProduct'>
      <img className='checkOutProduct__image' src={image} />
      <div className='checkOutProduct__info'>
        <p className='checkOutProduct__title'>{title}</p>
        <p className='checkOutProduct__title'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkOutProduct__rating'>
          {Array(rating).fill().map((_, i) => (
            <i><StarBorderIcon /></i>
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove item from basket</button>
      </div>

    </div>
  )
}

export default CheckOutProduct
