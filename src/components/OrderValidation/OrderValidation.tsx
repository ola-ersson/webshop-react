import React from 'react';
import { Link } from 'react-router-dom';
import './OrderValidation.scss';

interface IOrderValidationProps {}

export default function OrderValidation(props: IOrderValidationProps) {
  return (
    <div className='order-wrapper'>
      <div className='content'>
        Din order har bokats. Tack för att du handlar hos företaget!
      </div>
      <Link to='/'>
        <button className='button-order'>ok</button>
      </Link>
    </div>
  );
}
