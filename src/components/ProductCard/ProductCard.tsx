import React, { ChangeEvent, useState } from 'react';
import IMovie from '../../models/IMovie';
import './ProductCard.scss';
import { Scrollbars } from 'react-custom-scrollbars';

interface IMovieProps {
    movies: IMovie;
    /* updateParent(productNumber: number): void; */
    /* updateParent(movie: IMovie) : void; */
}



export default function ProductsCard(props: IMovieProps) {

/*     function addToCart(e: ChangeEvent<any>) {
        props.updateParent(e.target.)
    } */
/* const [amount, setAmount] = useState(0); */


 /*    function addToCart(event: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
        console.log(e.parentElement)
    }; */

        function addToCart(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
            //console.log(e.currentTarget.parentElement?.parentElement?.parentElement?.
            //console.log(cardHTML)
            /* console.log(props.movies.id) */
            /* props.updateParent(props.movies.id); */
        };

    return(
        <div id='card-item' key={props.movies.id}>
            <div className='container'>
                <img src={props.movies.imageUrl} alt='picture of filmcover'/>
                <div className='info'>
                    <div className='center-title'>
                        <div className='title'>{props.movies.name}
                            <span className='year-genre'> (Genre, {props.movies.year})</span>
                        </div>
                    </div>
                    <div className='description'>
                        <Scrollbars autoHide style={{ width: '100%', height: '100%'}}>
                            {props.movies.description}
                        </Scrollbars>
                    </div>
                    <div className='price-wrapper'>
                        <div className='price'>{props.movies.price} kr</div>
                    </div>
                    <div className='cart'>
                    <button type='button' className='button' onClick={addToCart}>Lägg i varukorgen</button>
                    </div>
                </div>
            </div>
        </div>
    );
}