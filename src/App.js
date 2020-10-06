import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Checkout from './Checkout'
import Menu from './Menu';
import Login from './Login'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Payment from './Payment'
import Orders from './Orders'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51HQHLxJKJr124CJlAhwm1oQYp8I5WdtkwzHXvbxiEwxLdJcNRofz6jssfBIYggOIz8bQogthxA2hOsBwIY3VPnbv00meGsftnr');


const  App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('User is', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);


    return (
      <div className="page-container">
        <div className="content-wrap">
        <Router>
         <Fragment>
            <Navbar />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/about'><About /></Route>
                <Route exact path='/contact'><Contact /></Route>
                <Route exact path='/menu'><Menu /></Route>
                <Route exact path='/payment'>
                 <Elements stripe={promise}><Payment /></Elements>            
                 </Route>
                <Route exact path='/login'><Login /></Route>
                <Route exact path='/checkout'><Checkout /></Route>
                <Route exact path='/orders'>
                <Orders />
                </Route>
            </Switch>
          </Fragment>
          </Router>
          </div> 
          <Footer />
      </div>
      
      
    );
  }


export default App;
