import React, { ChangeEvent, useState } from 'react';
import IMovie from '../../models/IMovie';
import './ProductCard.scss';
import { Scrollbars } from 'react-custom-scrollbars';

interface IMoviesProps {
    movies: IMovie[]
    /* updateParent(movie: IMovie) : void; */
}

export default function ProductsCard(props: IMoviesProps) {

/*     function addToCart(e: ChangeEvent<any>) {
        props.updateParent(e.target.)
    } */
    const [amount, setAmount] = useState(0);
    const defaultValueCart: IMovie[] = [];
    const [cart, setCart] = useState(defaultValueCart);

/*     function productAmount(e: ChangeEvent<HTMLInputElement) {
        setAmount(parseInt(e.target.value))
            product: IMovie) {
            setCart([...cart, product]);
        }
    } */

    const cardHTML = props.movies.map((movie) => {
        return(
        <div className='container' key={movie.id}>
            <img src={movie.imageUrl} alt='picture of filmcover'/>
            <div className='info'>
                <div className='center-title'>
                    <div className='title'>{movie.name}
                        <span className='year-genre'> (Genre, {movie.year})</span>
                    </div>
                </div>
                {/* <div>{movie.year}</div> */}
                {/* <div>Action</div> */}
                {/* <br/> */}
                <div className='description'>
                    <Scrollbars autoHide style={{ width: '100%', height: '100%'}}>
                        {movie.description}
                    </Scrollbars>
                </div>
                <div className='price-wrapper'>
                    <div className='price'>{movie.price} kr</div>
                </div>
                <div className='cart'>
                <input type='number' className='amount' min='1' /* onChange={productAmount} */></input>
                <button type='button' className='button' /* onClick={addToCart} */>Lägg i varukorg</button>
                </div>
            </div>
        </div>
        )
    });

    return(
        <div id='card-wrapper'>{cardHTML}</div>
    );
}