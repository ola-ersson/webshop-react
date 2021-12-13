export default interface Order {
  id?: number;
  companyId: number;
  created?: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: Array<IOrderRow>;
}

export interface IOrderRow {
  productId: number;
  amount: number;
}
