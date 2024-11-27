import { useEffect, useState } from "react"
import { useParams } from "react-router"
import {getProductsById} from '../asyncMock.js';
import { data } from "browserslist";
import ItemDetail from "./ItemDetail.jsx";
import "./styles/ItemDetailContainer.css";

function ItemDetailContainer() {
    const [product,setProduct] = useState({})
    const {productId} = useParams()

    useEffect(()=>{
        getProductsById(productId)
            .then((data) =>{
                setProduct(data)
            })
    }, [productId])

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer