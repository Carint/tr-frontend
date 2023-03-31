import { Category, Product } from "./interfaces/product.interface";

export const categoriesList: Category[] = [
    { id: 1, description: 'Pantalones' },
    { id: 2, description: 'Chaquetas y Abrigos'},
    { id: 3, description: 'Camisentas y Blusas'},
    { id: 4, description: 'Camisentas y Tops'},
    { id: 5, description: 'Faldas'}
]

export const productsList: Product[] = [
    {
        id: 1,
        title: 'Straight Leg Cargo Pants',
        price: 'US$ 15.28',
        category: [
            { id: 1, description: 'Pantalones' }
        ],
        description: 'Tincidunt rutrum egestas neque varius sociosqu dui aliquam nam enim vivamus, pretium facilisi litora mi magna ullamcorper morbi cum lacus, risus quisque potenti proin sem ante at donec senectus. Netus fames aliquam morbi eleifend ornare sociosqu sociis ultrices, porta elementum metus scelerisque facilisis faucibus litora nullam dictum, dis nascetur urna rhoncus tincidunt tempor mauris.',
        image: '../../../../assets/img/products/product_0101.webp'
    },
    {
        id: 2,
        title: 'Baseball Jacket',
        price: 'US$ 11.90',
        category: [    
            { id: 2, description: 'Chaquetas y Abrigos'}
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla sollicitudin libero massa praesent semper, diam pulvinar lacus aenean imperdiet habitant rutrum a primis torquent arcu. Donec rhoncus viverra fusce fames nec pellentesque integer cum nam enim.',
        image: '../../../../assets/img/products/product_0201.webp'
    },
    {
        id: 3,
        title: 'Long-Sleeve Crochet Knit',
        price: 'US$ 11.83',
        category: [
            { id: 3, description: 'Camisentas y Blusas'}
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla sollicitudin libero massa praesent semper, diam pulvinar lacus aenean imperdiet habitant rutrum a primis torquent arcu. Donec rhoncus viverra fusce fames nec pellentesque integer cum nam enim.',
        image: '../../../../assets/img/products/product_0301.webp'
    },
    {
        id: 4,
        title: 'High Waist Wide Leg Cargo Pants',
        price: 'US$ 19.20',
        category: [
            { id: 1, description: 'Pantalones' }
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla sollicitudin libero massa praesent semper, diam pulvinar lacus aenean imperdiet habitant rutrum a primis torquent arcu. Donec rhoncus viverra fusce fames nec pellentesque integer cum nam enim.',
        image: '../../../../assets/img/products/product_0401.webp'
    },
    {
        id: 5,
        title: 'Elbow-sleeve letting T-Shirt',
        price: 'US$ 11.00',
        category: [
            { id: 4, description: 'Camisentas y Tops'}
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit nulla sollicitudin libero massa praesent semper, diam pulvinar lacus aenean imperdiet habitant rutrum a primis torquent arcu. Donec rhoncus viverra fusce fames nec pellentesque integer cum nam enim.',
        image: '../../../../assets/img/products/product_0501.webp'
    },
    {
        id: 6,
        title: 'Wide-leg Jeans',
        price: 'US$ 20.02',
        category: [
            { id: 1, description: 'Pantalones' }
        ],
        description: 'Habitasse justo augue porta id cras risus pulvinar montes dui, ad maecenas ullamcorper et massa mollis nibh duis.',
        image: '../../../../assets/img/products/product_0601.webp'
    },
    {
        id: 7,
        title: 'Mock Two-Piece Long-Sleeve',
        price: 'US$ 15.12',
        category: [
            { id: 3, description: 'Camisentas y Blusas'}
        ],
        description: 'Inceptos porta orci ac varius nostra arcu eu scelerisque placerat, turpis dui accumsan sociis et hendrerit luctus himenaeos lobortis.',
        image: '../../../../assets/img/products/product_0701.webp'
    },
    {
        id: 8,
        title: 'Star Embroidered Straight Leg Jeans',
        price: 'US$ 22.62',
        category: [
            { id: 1, description: 'Pantalones' }
        ],
        description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos enim, netus quis turpis conubia.',
        image: '../../../../assets/img/products/product_0801.webp'
    }
]