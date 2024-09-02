export const category = ["GADGETS", "FIGURAS", "MATES"];

const products = [
    {id: '1', name: 'Llavero', price: 2000, category: 'GADGETS', img: '../src/pictures/llavero1.png', stock: 25, descripcion: 'Agregar descripcion'},
    {id: '2', name: 'Saitama', price: 2000, category: 'FIGURAS', img: '../src/pictures/saitama.png', stock: 25, descripcion:'Agregar descripcion'},
    {id: '3', name: 'Mate Giroscopio', price: 2000, category: 'MATES', img: '../src/pictures/giroscopio.png', stock: 25, descripcion:'Agregar descripcion'},
    {id: '4', name: 'Mate Gilbert', price: 2000, category: 'MATES', img: '../src/pictures/gilbert.png', stock: 25, descripcion:'Agregar descripcion'},
    {id: '5', name: 'Soporte Celular', price: 2000, category: 'GADGETS', img: '../src/pictures/celular.png', stock: 25, descripcion:'Agregar descripcion'},
    {id: '6', name: 'Giorno', price: 2000, category: 'FIGURAS', img: '../src/pictures/giorno.png', stock: 25, descripcion:'Agregar descripcion'}
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category));
        }, 500);
    });
};

