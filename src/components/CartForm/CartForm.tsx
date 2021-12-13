import React, { ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';
import './CartForm.scss';

interface ICartFormProps {
  removeForm(arg0: boolean): void;
  completePurchase(): void;
  collectUserInfo(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void;
}

export default function CartForm(props: ICartFormProps) {
  const history = useHistory();
  function collectUserInfo(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    props.collectUserInfo(e);
  }

  return (
    <div className='cart-form-wrapper'>
      <form className='cart-form' action=''>
        <fieldset className='cart-fieldset'>
          <legend className='cart-legend'>Fyll i information</legend>
          <input
            type='text'
            name='firstName'
            placeholder='Förnamn'
            onChange={collectUserInfo}
          />
          <input
            type='text'
            name='lastName'
            placeholder='efternamn'
            onChange={collectUserInfo}
          />
          <input
            type='email'
            name='email'
            placeholder='email'
            onChange={collectUserInfo}
          />
          <label htmlFor='payment'>Betalningsmetod</label>
          <select name='paymentMethod' onChange={collectUserInfo}>
            <option value=''> Välj en betalningsmetod...</option>
            <option value='Visa'>VISA</option>
            <option value='MasterCard'>MasterCard</option>
          </select>
        </fieldset>
        <div className='form-button-container'>
          <button
            type='button'
            className='form-button'
            onClick={() => {
              props.completePurchase();
              history.push('/order_validation');
            }}
          >
            Slutför Köp
          </button>
          <button
            type='button'
            className='form-button'
            onClick={() => props.removeForm(false)}
          >
            Avbryt
          </button>
        </div>
      </form>
    </div>
  );
}
