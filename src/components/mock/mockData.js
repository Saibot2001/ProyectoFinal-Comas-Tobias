export const category = ["GADGETS", "FIGURAS", "MATES"];

const products = [
    {id: '1', name: 'Llavero', price: 2000, category: 'GADGETS', img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'},
    {id: '2', name: 'Saitama', price: 2000, category: 'FIGURAS', img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'},
    {id: '3', name: 'Mate Piston', price: 2000, category: 'MATES', img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'},
    {id: '4', name: 'Mate Giroscopio', price: 2000, category: 'MATES', img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'},
    {id: '5', name: 'Soporte Notebook', price: 2000, category: 'GADGETS', img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'},
    {id: '6', name: 'Giorno', price: 2000, category: 'FIGURAS', img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'}
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

