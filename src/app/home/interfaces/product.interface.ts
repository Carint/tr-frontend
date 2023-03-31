// Interface API Platzi
// export interface Product {
//     id: number;
//     title: string;
//     price: string;
//     description: string;
//     category: Category;
//     images: string[];
// }

// export interface Category {
//     id: number;
//     name: string;
//     image: string;
// }

export interface Product {
    id: number;
    title: string;
    price: string;
    category: Category[];
    description: string;
    image: string;
}

export interface Category {
    id: number;
    description: string;
}
