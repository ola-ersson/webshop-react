import React from 'react';
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Header(props: any) {

    return(
        <header className="bg-primary white">
            <div className='header-wrapper mw-1440 auto row between center-v relative'>
                <div id='company-logo' className='fw-700 ml-15'>fÖRERETAGET.se</div>
                    <div id='icon-wrapper' className='icon-wrapper mr-15 relative'>
                        <FontAwesomeIcon id='cart-icon' icon='shopping-basket' />
                    <div id='cart-amount'>0</div>
                </div>
            </div>
        </header>
    );
}