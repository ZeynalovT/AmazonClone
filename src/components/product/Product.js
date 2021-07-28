import React from 'react'
import './product.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useStateValue } from '../../State/StateProvider'
import { useHistory } from 'react-router-dom'

const Product = ({id, title, image, price, rating}) => {

  const [{basket, user}, dispatch] = useStateValue();

  const histoty = useHistory();


  const addToBasket = () => {

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className='product'>
      <div>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className='product__rating'>
        {Array(rating).fill().map((_, i) => (
          <i><StarBorderIcon /></i>
        ))}

        </div>
      </div>

      <img src={image} />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
