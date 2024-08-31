export const categorias = [ "GADGETS", "FIGURAS" , "MATES"] ;

const products = [
    {id: '1', name: 'Llave', price: 2000, category: 'GADGETS',  img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'},
    {id: '2', name: 'Saitama', price: 2000, category: 'FIGURAS',  img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'},
    {id: '3', name: 'Mate', price: 2000, category: 'MATES',  img: 'pendiente', stock: 25, descripcion:'Agregar descripcion'}
    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        },500)
    })
} 

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}
