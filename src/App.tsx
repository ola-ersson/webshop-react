import React, { ChangeEvent, useEffect, useState } from 'react';
import './components/FontAwsomeIcons/FontAwsomeIcons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import IMovieItem from './models/IMovieItem';
import IOrder, { IOrderRow } from './models/IOrder';
import Admin from './components/Admin/Admin';
import OrderValidation from './components/OrderValidation/OrderValidation';
import AddProduct from './components/AddProduct/AddProduct';
import IUserInfo from './models/IUserInfo';
import axios from 'axios';

function App() {
  const companyId = 8844;
  const defaultValueMovies: IMovieItem[] = [];
  const [movies, setMovies] = useState(defaultValueMovies);
  const defaultValueCartItems: IMovieItem[] = [];
  const [cartItems, setCartItems] = useState(defaultValueCartItems);
  const [basketAmount, setBasketAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const defaultUserInfo: IUserInfo = {
    firstName: '',
    lastName: '',
    email: '',
    paymentMethod: '',
  };
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<IMovieItem[]>(
          // Det här är för dotnet API:et som jag byggt.
          /* 'https://localhost:5001/products' */
          // Det här är för medieinstitutet API:et.
          'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
        );
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let basketAmount = 0;
    let totalPrice = 0;
    cartItems.forEach((item) => {
      basketAmount += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    setBasketAmount(basketAmount);
    setTotalPrice(totalPrice);
  }, [cartItems]);

  const completePurchase = async () => {
    let orderRow: IOrderRow[] = cartItems.map(({ id, quantity }) => ({
      productId: id,
      /* product: null, */
      amount: quantity,
    }));
    let orderItem: IOrder = {
      companyId: companyId,
      /* created: new Date().toJSON(), */
      createdBy: `Namn: ${userInfo.firstName} ${userInfo.lastName}, Email: ${userInfo.email}`,
      paymentMethod: userInfo.paymentMethod,
      totalPrice: totalPrice,
      status: 0,
      orderRows: orderRow,
    };
    console.log(orderItem);
    try {
      const { data } = await axios.post(
        // Det här är för dotnet API:et som jag byggt.
        /* 'https://localhost:5001/orders', */
        // Det här är för medieinstitutet API:et.
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders',
        orderItem
      );
      console.log(`data: `, data);
      setBasketAmount(0);
      setCartItems([]);
    } catch (error) {
      console.log(`error: `, error);
    }
  };

  function addToCart(cartItem: IMovieItem, action: string): void {
    const exists: IMovieItem | undefined = cartItems.find(
      (item: IMovieItem) => item.id === cartItem.id
    );
    if (exists && action === 'add') {
      setCartItems(
        cartItems.map((item: IMovieItem) =>
          cartItem.id === item.id
            ? { ...exists, quantity: exists.quantity + 1 }
            : item
        )
      );
    } else if (action === 'add') {
      setCartItems([...cartItems, { ...cartItem, quantity: 1 }]);
    } else if (exists?.quantity === 1 && action === 'remove') {
      setCartItems(cartItems.filter((item) => cartItem.id !== item.id));
      console.log('remove card');
    } else if (exists && action === 'remove') {
      setCartItems(
        cartItems.map((item: IMovieItem) =>
          item.id === cartItem.id
            ? { ...exists, quantity: exists.quantity - 1 }
            : item
        )
      );
    }
  }

  function fromChild(item: IMovieItem, action: string) {
    addToCart(item, action);
  }
  function emptyCart() {
    setCartItems([]);
    setBasketAmount(0);
  }

  function collectUserInfo(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function getMovieName(productid: number) {
    const [result] = movies.filter((movie) => movie.id === productid);
    let data: string;
    result === undefined ? (data = '') : (data = result.name);
    return data;
  }

  return (
    <Router>
      <div className='App'>
        <Header basketAmount={basketAmount}></Header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Products movies={movies} toParent={fromChild}></Products>
            </Route>
            <Route path='/cart'>
              <Cart
                totalPrice={totalPrice}
                cartItems={cartItems}
                toParent={fromChild}
                emptyCart={emptyCart}
                completePurchase={completePurchase}
                collectUserInfo={collectUserInfo}
              ></Cart>
            </Route>
            <Route path='/admin'>
              <Admin toParent={getMovieName}></Admin>
            </Route>
            <Route path='/add_product'>
              <AddProduct></AddProduct>
            </Route>
            <Route path='/order_validation'>
              <OrderValidation></OrderValidation>
            </Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
