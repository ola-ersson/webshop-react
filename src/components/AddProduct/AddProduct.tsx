import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import IMovieItem from '../../models/IMovieItem';
import './AddProduct.scss';

interface Props {}

function AddProduct(props: Props) {
  const history = useHistory();
  const defaultValueFilmInfo: IMovieItem = {
    id: 0,
    name: '',
    year: 0,
    description: '',
    price: 0,
    imageUrl: '',
    added: '',
    quantity: 0,
  };
  const [filmInfo, setFilmInfo] = useState(defaultValueFilmInfo);

  function collectFilmInfo(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFilmInfo({ ...filmInfo, [e.target.name]: e.target.value });
  }

  const addFilm = async () => {
    try {
      const { data } = await axios.post('https://localhost:5001/products', {
        name: filmInfo.name,
        year: filmInfo.year,
        description: filmInfo.description,
        price: filmInfo.price,
        imageUrl: filmInfo.imageUrl,
      });
      console.log(`data: `, data);
    } catch (error) {
      console.log(`error: `, error);
    }
  };

  return (
    <div className='create-product-wrapper'>
      <div className='admin-title'>Admin</div>
      <div className='admin-module-wrapper'>
        <form className='cart-form' autoComplete='off' action=''>
          <fieldset className='cart-fieldset'>
            <legend className='cart-legend'>
              Fyll i information om den nya filmen
            </legend>
            <input
              type='text'
              name='name'
              placeholder='Titel'
              onChange={collectFilmInfo}
            />
            <input
              type='number'
              name='year'
              placeholder='Utgivningsår'
              onChange={collectFilmInfo}
            />
            <input
              type='number'
              name='price'
              placeholder='Pris'
              onChange={collectFilmInfo}
            />
            <input
              type='text'
              name='imageUrl'
              placeholder='Bild URL'
              onChange={collectFilmInfo}
            />
            <textarea
              className='film-description-create'
              name='description'
              rows={8}
              placeholder='Filmens handling...'
              onChange={collectFilmInfo}
            />
            <div className='add-film-form-button-container'>
              <button
                type='button'
                className='form-button'
                onClick={() => {
                  addFilm();
                  /* history.push('/order_validation'); */
                }}
              >
                + Lägg till
              </button>
              <button
                type='button'
                className='form-button margin-left'
                onClick={() => {
                  history.push('/admin');
                }}
              >
                Avbryt
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
