interface IRequests {
    productsUrl: string;
    ordersUrl: string;
    categoriesUrl: string;
    searchUrl: string;
}

const requests = {
    productsUrl: 'products',
    ordersUrl: 'orders',
    categoriesUrl: 'categories',
    searchUrl: 'search'
}

export default requests;