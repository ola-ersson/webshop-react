import React, { useEffect, useState } from 'react';
import './Products.scss';
import axios from '../../Axios';
import IMovie from '../../models/IMovie';
import ProductsCard from '../ProductCard/ProductCard';
import requests from '../../Requests';

interface IPropsProducts {
    products: IMovie[];
}

export default function Products(props: IPropsProducts) {

    const defaultValueCart: IMovie[] = [];
    //const [cart, setCart] = useState(defaultValueCart);

    function updateParent(cartId: number) {
        console.log('')
    };

    const content = props.products.map((movies, key) => {
        return(<ProductsCard movies={movies} key={key}/>)
    })

    return(
        <main>
            <h1 className='text-center mb-10'>Filmer</h1>
            <section id='film-wrapper' className='row wrap'>
                {content}
            </section>
        </main>
    );
}