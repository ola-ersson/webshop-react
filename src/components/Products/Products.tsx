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

    return(
        <div id="bakgrund">
            <h1 id='products'>FILMER</h1>
            <div id='films-center'>
                <ProductsCard movies={movies}></ProductsCard>
            </div>
        </div>
    );
}