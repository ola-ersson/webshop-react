import React from 'react';
import './Header.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Header() {

    return(
        <div id="header">
            <div id="wrapper">
                <div id="rubrik">FÖRERETAGET.se</div>
                <div id="cart-wrapper">
                    <div id="icon-wrapper">
                        <FontAwesomeIcon icon='shopping-basket' id='cart-icon'/>
                        <div id="amount">1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}