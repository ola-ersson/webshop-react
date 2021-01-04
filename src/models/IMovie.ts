interface IMovie {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    year: number;
    added: Date;
    productCategory: Array<ICategory>;
};

interface ICategory {
    categoryId: number;
    category: null;
};

export default IMovie;