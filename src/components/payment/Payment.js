import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../State/StateProvider'
import './payment.css'
import { useHistory } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CheckOutProduct from '../checkout/CheckOutProduct'
import { getBasketTotal } from '../../State/reducer'
import axios from 'axios'



const Payment = () => {
  const [{basket, user}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();


  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        //Stripe expects the total in a currencies subnits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret();
  },[basket])

  console.log('THE SECRET IS ==> ', clientSecret)


  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
      payment_method: {
          card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      //paymenyIntert = payment confirmation
      setSucceeded(true);
      setError(null)
      setProcessing(false)

      history.replace('/orders')
    })

  }

  const handleChange = event => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '')
  }

  return (
    <div className='payment'>
        <div className='payment__container'>
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Delivery adress</h3>
            </div>
            <div className='payment__adress'>
              <p>{user?.email}</p>
              <p>123 React Line</p>
              <p>Loas Angeles, CA</p>
            </div>
          </div>

          <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map(item => (
              <CheckOutProduct
                id={item.id}
                item={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
               />
            ))}
          </div>
          </div>

          <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment method</h3>
          </div>
          <div className='payment__details'>

            <form onClick={handleSubmit}>
              <CardElement onClick={handleChange} />
              <div className='payment__priceContainer'>
              <CurrencyFormat
              renderText={(value) => (
                  <h3>{value}</h3>
                )}

              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              />
              <button disables={processing || disabled || succeeded}>
                <span>{processing ? <p>processing</p> : 'Buy now'}</span>

              </button>
              </div>
              {error && <div>{error}</div>}
              </form>
          </div>
          </div>

        </div>
    </div>
  )
}

export default Payment
