import { getProducts } from "./data"
import { Link, Outlet } from "react-router-dom"
export default function Products(){
    const data=getProducts();
    return(
        <div>
            <nav>
                {
                    data.map((value,key) => {
                        return(
                        
                                <Link key={key} to={`/product/${value.id}`}>{value.name}</Link>
                                
                            
                        )
                    })
                }
            </nav>
            <Outlet/>
        </div>
    )
}
