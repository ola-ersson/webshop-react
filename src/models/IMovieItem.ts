export default interface IMovieItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  year: number;
  added: string;
  productCategory?: Array<IProductCategory>;
  quantity: number;
}

interface IProductCategory {
  categoryId: number;
  category: null;
}
