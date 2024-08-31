/* eslint-disable react/prop-types */
import { useState, useEffect} from "react"
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from "../mock/mockData"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categotyId} = useParams()

    useEffect(() => {
        const asyncFunc = categotyId ? getProductsByCategory : getProducts
        
        asyncFunc(categotyId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categotyId])
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer