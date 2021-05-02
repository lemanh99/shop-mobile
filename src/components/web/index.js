import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Header from './header';
import Footer from './footer';
import NotFound from '../nomatch'
import BrandDetail from './brand-detail';
import Contact from './contact';
import Faq from './customer/faq';
import Term from './customer/term';
import Desclaimer from './customer/desclaimer';
import Privacypolicy from './customer/privacy-policy';
import Login from '../auth/login';
import Register from '../auth/register';
import Category from './category-mobile'
import Cart from './cart';
import Checkout from './checkout';
import MyAccount from './my-account';
import HistoryOrder from './history-order';
import ChangePassword from './change-password';
import Singleproduct from './singleproduct';
import Logout from '../auth/logout';
export default class Main extends Component {
  render() {
      return (
        <main>
          <div className="wrapper">
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/brand/:id' component={BrandDetail} />
              <Route path="/product-details/:id" component={Singleproduct} />
              <Route path='/contact' component={Contact} />
              <Route path='/faq' component={Faq} />
              <Route path='/term-and-condition' component={Term} />
              <Route path='/desclaimer' component={Desclaimer} />
              <Route path='/privacy-and-policy' component={Privacypolicy} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='/logout' component={Logout} />
              <Route path='/categories' component={Category} />
              <Route path='/carts' component={Cart} />
              <Route path='/checkout' component={Checkout} />
              <Route path='/my-account' component={MyAccount} />
              <Route path='/history' component={HistoryOrder} />
              <Route path='/change-password' component={ChangePassword} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </main>
      );
    }
}