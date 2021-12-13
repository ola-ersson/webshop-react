import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IOrder from '../../models/IOrder';
import AdminCard from '../AdminCard/AdminCard';
import './Admin.scss';

interface IAdminProps {
  toParent(productid: number): string;
}

export default function Admin(props: IAdminProps) {
  const defaultValueOrderList: IOrder[] = [];
  const [orderList, setOrderList] = useState(defaultValueOrderList);

  const content = orderList.map((item) => {
    return (
      <AdminCard item={item} toParent={fromChild} key={item.id}></AdminCard>
    );
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get<IOrder[]>(
          // Det här är för dotnet API:et som jag byggt.
          /* 'https://localhost:5001/orders' */
          // Det här är för medieinstitutet API:et.
          'https://medieinstitutet-wie-products.azurewebsites.net/api/orders'
        );
        setOrderList(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  function fromChild(productId: number): string {
    return props.toParent(productId);
  }

  return (
    <>
      <div className='admin-wrapper'>
        <div className='admin-top-part'>
          <div className='admin-title'>Admin</div>
          <Link to='/add_product'>
            <button className='add-product-btn'>+ Lägg till ny produkt</button>
          </Link>
          <div className='admin-text'>order list</div>
        </div>
      </div>
      <div className='admin-order-wrapper'>{content}</div>
    </>
  );
}
