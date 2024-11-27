import { useState } from "react"


function ItemCount({initialValue=1, stock, onAdd}) {
    const [count,setCount] = useState(initialValue);

    const decrement = () => {
        if (count > 1){
            setCount(count - 1);
        }
    }

    const increment = () => {
        if (count < stock){
            setCount(count + 1);
        } 
    }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={decrement}>Disminuir</button>
    <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
    <button onClick={increment}>Aumentar</button>
    </>
  )
}

export default ItemCount