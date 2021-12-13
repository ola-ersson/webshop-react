import React from 'react';
import IMovieItem from '../../models/IMovieItem';
import './ProductCard.scss';
import { Scrollbars } from 'react-custom-scrollbars';

interface IProductCardProps {
  movie: IMovieItem;
  toParent(item: IMovieItem, action: string): void;
}

export default function ProductsCard(props: IProductCardProps) {
  return (
    <div id='movie-card'>
      <img src={props.movie.imageUrl} alt='filmcover' />
      <div className='info'>
        <div className='center-title'>
          <div className='title'>
            {props.movie.name}
            <span className='year-genre'> (Genre, {props.movie.year})</span>
          </div>
        </div>
        <div className='description'>
          <Scrollbars autoHide style={{ width: '100%', height: '100%' }}>
            {props.movie.description}
          </Scrollbars>
        </div>
        <div className='price-wrapper'>
          <div className='price'>{props.movie.price} kr</div>
        </div>
        <div className='cart'>
          <button
            type='button'
            className='movie-card-button'
            onClick={() => props.toParent(props.movie, 'add')}
          >
            Lägg i varukorgen
          </button>
        </div>
      </div>
    </div>
  );
}
