import { useEffect, useState } from "react";
import {getProducts, getProductsByCategory} from '../asyncMock'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";



function ItemListContainer({greetings}) {
    const [products, setProduct] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        const asyncFunctions = categoryId ? getProductsByCategory : getProducts
        asyncFunctions(categoryId)
            .then(data => setProduct(data))  
    },[categoryId])

  return (
    <div>
        <h2>{greetings}</h2>
        <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;