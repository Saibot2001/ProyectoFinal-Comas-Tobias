import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { getProducts, getProductsByCategory } from "../mock/mockData";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
                setProducts(response);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            {products.length > 0 ? <ItemList products={products} /> : <p>No products found</p>}
        </div>
    );
};

export default ItemListContainer;
