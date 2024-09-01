import './ItemCount.css'; // Asegúrate de que la ruta sea correcta
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="ItemCount">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button 
                onClick={() => onAdd(count)} 
                disabled={stock === 0}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ItemCount;

