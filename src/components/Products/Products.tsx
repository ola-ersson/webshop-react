import React, { useEffect, useState } from 'react';
import './Products.scss';
import axios from '../../Axios';
import IMovie from '../../models/IMovie';
import ProductsCard from '../ProductCard/ProductCard';
import requests from '../../Requests';

interface IUrlProps {
    endUrl: string
}



export default function Products(props: IUrlProps) {

    const defaultValueCart: IMovie[] = [];
    //const [cart, setCart] = useState(defaultValueCart);

    const defaultValueMovies: IMovie[] = [];
    const [movies, setMovies] = useState(defaultValueMovies);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get<IMovie[]>(props.endUrl);
                setMovies(result.data);
            }
            catch(err) {
                console.log(err.message);
            }
        }
        fetchData();
    }, [props.endUrl])

    function updateParent(cartId: number) {
        console.log('')
    };

    const content = movies.map((movies, key) => {
        return(<ProductsCard movies={movies}/>)
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