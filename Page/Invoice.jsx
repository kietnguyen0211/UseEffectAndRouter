import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
export default function Invoice(){
    const [data,setData]=useState(null)
    const param=useParams()
    const getData=async()=>{
        const url=`https://645640b62e41ccf16917c562.mockapi.io/list/${parseInt(param.id)}`
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
    },[param])
  return <h2>{data && data.name}</h2>
}