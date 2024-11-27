import { useContext } from "react"
import { CartContext } from "../components/context/CartContext"

export const useCart = () => {
    return useContext(CartContext)
}