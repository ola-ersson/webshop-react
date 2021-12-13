interface IRequests {
  productUrl: string;
  orderUrl: string;
  categoryUrl: string;
  searchUrl: string;
}
const requests: IRequests = {
  productUrl: '/products',
  orderUrl: '/orders',
  categoryUrl: '/categories',
  searchUrl: '/search',
};

console.log(requests.productUrl);

export default requests;
