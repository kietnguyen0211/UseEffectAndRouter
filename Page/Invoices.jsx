import { Link, Outlet, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import Invoice from "./Invoice"
import axios from "axios"
export default function Invoices(){
    let list = []

    const [data,setData]=useState(null)

    const getData=async()=>{
        const url="https://645640b62e41ccf16917c562.mockapi.io/list"
        axios.get(url).then(res=>{
            setData(res.data)
        }).catch((error)=>{
            if(error.response.status="404")
            {

            }
        })
    }
    useEffect(()=>{
        getData()
    },[])
    console.log(data)

    return(
        <div>
            <nav>
                {
                    data && data.map((value,key)=>{
                        return(
                            
                                <Link key={key} to={`/invoice/${value.id}`}>
                                    {value.name}
                                </Link>
                            
                        )
                    })
                }
                                <Routes path="/invoice" element={<Invoice/>}>

                                </Routes >
            </nav>
            <Outlet/>
        </div>
    )
}