import React, { useEffect } from 'react'
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Switch, Route } from "react-router-dom";
import CheckOut from "./components/checkout/CheckOut"
import Login from "./components/login/Login"
import Payment from "./components/payment/Payment"
import Register from "./components/register/Register";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useStateValue } from './State/StateProvider'
import { auth } from './firebase'

const promise = loadStripe('pk_test_51JCIlkHMV2rvdoJNRSh3QNTr9M58iO01OzPtcwt5xINvcQZbRX4QkjoA24vCtV7XYH5TLKgJZz4vF6YvuhPkCjr700r7HenTed')

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('current user ===>', authUser)
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
    <div className="App">

      <Switch>
      <Route exact path="/payment">
      <Elements stripe={promise}>
        <Header />
        <Payment />
      </Elements>

      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>

        <Route path="/checkout">
        <Header />
          <CheckOut />

        </Route>

        <Route path="/">
        <Header />
          <Home />

        </Route>
      </Switch>
    </div>
  );
}

export default App;
