import React from "react"
import { useDeleteproductMutation, useGetproductsQuery } from "../../services/productsApi"
import { Link, useNavigate } from "react-router-dom"

function Products(){
    var{isLoading,data} = useGetproductsQuery()
    console.log(isLoading,data)
    

    var [DelFN] = useDeleteproductMutation()
    function del(ind){
        DelFN(ind)
        
    }
    
    return(
        <div className="d-flex flex-wrap" style={{marginLeft:"6%",marginTop:"35px"}}>
            {
                data?.map((p,i)=>{
                    return(
                    <div className="m-2 p-2">
                        <div className="shadow ps-5" style={{width:"300px",height:"400px"}} >
                        <img src={p.image} style={{width:"200px",height:"150px",marginTop:"25px"}}/><br></br><br></br>
                        <div><b>Title:</b> {p.title.slice(0,20)}</div>
                        <div><b>Description:</b> {p.description.slice(0,30)}</div>
                        <div><b>Price:</b> {p.price}</div><br></br>
                        <Link to={`/Products/${p.id}`}><button className="btn btn-warning">View</button></Link>&nbsp;&nbsp;
                        <button className="btn btn-info">Edit</button>&nbsp;&nbsp;
                        <button className="btn btn-danger" onClick={()=>del(i)}>Delete</button>
                        </div>
                        
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Products