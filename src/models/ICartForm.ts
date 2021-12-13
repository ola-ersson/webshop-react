import React from 'react';

interface ICustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  paymentMethod: string;
}

interface IOrderInfo {
  companyId: number;
  created: Date;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: Array<IOrderRowInfo>;
}

interface IOrderRowInfo {
  productId: number;
  product: string;
  amount: number;
}
