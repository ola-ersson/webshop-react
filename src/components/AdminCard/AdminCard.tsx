import React from 'react';
import IOrder from '../../models/IOrder';
import './AdminCard.scss';

interface IAdminCardProps {
  item: IOrder;
  toParent(productid: number): string;
}

export default function Admin(props: IAdminCardProps) {
  const leveransStatus = props.item.status === 0 ? 'ej skickad' : 'skickad';

  const content = props.item.orderRows.map((item) => {
    const movieName: string = props.toParent(item.productId);
    return (
      <div className='row-wrapper' key={item.productId}>
        <div className='row-design'>Produkt Id: {item.productId}</div>
        <div className='row-design'>Film: {movieName}</div>
        <div className='row-design'>Antal: {item.amount}</div>
      </div>
    );
  });

  return (
    <div className='admin-order-card'>
      <div>
        <div className='design id'>Order Id: {props.item.id}</div>
        <div className='design created'>
          Beställningsdatum: {props.item.created}
        </div>
        <div className='design created-by'>{props.item.createdBy}</div>
        <div className='design paymeny-method'>
          Betalningsmetod: {props.item.paymentMethod}
        </div>
        <div className='design total-price'>
          Summa: {props.item.totalPrice}kr
        </div>
        <div className='design status'>Status: {leveransStatus}</div>
      </div>
      <div>
        <div className='design order-row'>Beställning:{content}</div>
      </div>
    </div>
  );
}
