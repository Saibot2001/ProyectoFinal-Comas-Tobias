
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleAdd = (quantity) => {
        console.log('Cantidad agregada:', quantity);
        // Aquí puedes agregar la lógica para agregar el producto al carrito
    };

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoría: {category}</p>
                <p className="Info">Descripción: {description}</p>
                <p className="Info">Precio: ${price}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={handleAdd} />
            </footer>
        </article>
    );
};

export default ItemDetail;


