import React from 'react';
import IMovieItem from '../../models/IMovieItem';
import './CartCard.scss';

interface ICartCardProps {
  item: IMovieItem;
  toParent(item: IMovieItem, action: string): void;
}

export default function CartCard(props: ICartCardProps) {
  return (
    <div className='cart-item'>
      <img src={props.item.imageUrl} className='cart-img' alt='filmcover' />
      <div className='cart-info'>
        <div className='cart-center-title'>
          <div className='cart-title'>
            {props.item.name}
            <span className='cart-year-genre'> (Genre, {props.item.year})</span>
          </div>
        </div>
        <div className='cart-price'>{props.item.price} kr</div>
        <div className='cart-price-count-wrapper'>
          <div className='cart-quantity'>{props.item.quantity} st</div>
          <div className='cart-price-calc'>
            Totalt: {props.item.price * props.item.quantity} kr
          </div>
        </div>
        <div className='cart-item-buttons-wrapper'>
          <button
            type='button'
            className='cart-item-button'
            onClick={() => props.toParent(props.item, 'add')}
          >
            +
          </button>
          <button
            type='button'
            className='cart-item-button'
            onClick={() => props.toParent(props.item, 'remove')}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}
