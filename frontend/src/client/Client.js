import React from 'react';
import { Container } from '@material-ui/core';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import SearchResult from './pages/SearchResult';
import Catagory from './pages/Catagory';
import Subcatagory from './pages/Subcatagory';
import Error from './pages/Error';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';




class Client extends React.Component{
    render(){
        return(
            <Router> 
                <div className="client_area">
                    <Header/>
                    <Navigation/>
                    <Container>
                        <Switch>
                            <Route exact path='/Catagory/:catId' component={Catagory}/>
                            <Route exact path='/Subcatagory/:subcatId' component={Subcatagory}/>
                            <Route exact path='/Product/:productId' component={Product}/>
                            <Route exact path='/productdetails/:id' component={ProductDetails}/>
                            <Route exact path='/searchresult' component={SearchResult}/>
                            <Route exact path='/signin' component={Signin}/>
                            <Route exact path='/signup' component={Signup}/>
                            <Route exact path='/cart' component={Cart}/>
                            <Route exact path='/' component={Home}/>
                            <Route exact component={Error}/>
                        </Switch>  
                    </Container>
                    <Footer/>
                </div>      
            </Router>
        )
    }
}





export default Client ;