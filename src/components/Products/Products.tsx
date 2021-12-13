import React from 'react';
import './Products.scss';
import IMovieItem from '../../models/IMovieItem';
import ProductCard from '../ProductCard/ProductCard';

interface IProductsProps {
  movies: IMovieItem[];
  toParent(item: IMovieItem, action: string): void;
}

export default function Products(props: IProductsProps) {
  function fromChild(item: IMovieItem, action: string) {
    props.toParent(item, action);
  }
  const content = props.movies.map((movie) => {
    return <ProductCard movie={movie} key={movie.id} toParent={fromChild} />;
  });
  return (
    <div>
      <h1 className='product-title'>Filmer</h1>
      <section className='film-wrapper'>{content}</section>
    </div>
  );
}
