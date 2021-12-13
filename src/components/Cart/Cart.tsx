import React, { ChangeEvent, useState } from 'react';
import './Cart.scss';
import IMovieItem from '../../models/IMovieItem';
import { Scrollbars } from 'react-custom-scrollbars';
import CartCard from '../CartCard/CartCard';
import CartForm from '../CartForm/CartForm';
import { Link } from 'react-router-dom';

interface ICartProps {
  cartItems: IMovieItem[];
  totalPrice: number;
  toParent(item: IMovieItem, action: string): void;
  emptyCart(): void;
  completePurchase(): void;
  collectUserInfo(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

export default function Cart(props: ICartProps) {
  const [toggleForm, setToggleForm] = useState(Boolean);

  function fromChild(item: IMovieItem, action: string) {
    props.toParent(item, action);
  }

  function collectUserInfo(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    props.collectUserInfo(e);
  }

  function showForm(arg0: boolean): void {
    setToggleForm(arg0);
  }

  const contentForm = toggleForm ? (
    <CartForm
      removeForm={showForm}
      completePurchase={props.completePurchase}
      collectUserInfo={collectUserInfo}
    ></CartForm>
  ) : (
    <div className='cart-something'>
      <div className='info'></div>
    </div>
  );

  const content = props.cartItems.map((item) => {
    return <CartCard item={item} toParent={fromChild} key={item.id}></CartCard>;
  });

  return (
    <div className='main-cart'>
      {contentForm}
      <div id='cart-items-container'>
        <div id='item-wrapper'>
          <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
            {content}
          </Scrollbars>
        </div>
        <div className='summa'>Total summa: {props.totalPrice} kr</div>
        <div className='cart-item-button-container'>
          <button
            type='button'
            className='cart-item-container-button'
            onClick={() => showForm(true)}
          >
            Gå till kassan
          </button>
          <Link to='/'>
            <button
              type='button'
              className='cart-item-container-button'
              onClick={() => props.emptyCart()}
            >
              Töm korgen
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
