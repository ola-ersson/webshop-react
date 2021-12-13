import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  basketAmount: number;
}

export default function Header(props: IHeaderProps) {
  return (
    <header className='bg-primary white'>
      <div className='header-wrapper mw-1440 auto row jc-between center-v relative'>
        <Link to='/' className='company-logo'>
          fÖRERETAGEt.se
        </Link>
        <Link to='/admin'>"TO ADMIN"</Link>
        <Link
          to='/cart'
          id='icon-wrapper'
          className='header-icon-wrapper mr-15 relative'
        >
          <FontAwesomeIcon id='cart-icon' icon='shopping-basket' />
          <div className='cart-amount'>
            <div className='center-cart-amount'>{props.basketAmount}</div>
          </div>
        </Link>
      </div>
    </header>
  );
}
