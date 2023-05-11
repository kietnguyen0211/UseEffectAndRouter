import { useParams } from "react-router-dom"
import { getProductById } from "./data"
export default function Product(){
    const param = useParams()
    const data = getProductById(parseInt(param.id))
    return(
        <div>Product Detail: {data.name}</div>
    )
}