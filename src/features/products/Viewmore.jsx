import React from 'react';
import { useGetproductsByIdQuery } from '../../services/productsApi';
import { useParams } from 'react-router-dom';

function Viewmore(){
    var {id} = useParams();

    var {isLoading,data} = useGetproductsByIdQuery(id);
    console.log(isLoading,data)
    return(
        <div className='d-flex border shadow' style={{width:"800px",height:"300px",marginLeft:"350px",marginTop:"150px"}}>
            <div>
            <img src={data?.image} style={{width:"200px",marginLeft:"20px",marginTop:"50px"}}/>
            </div>
            <div style={{marginTop:"100px",marginLeft:"40px"}}>
            <div><b>Title:</b> {data?.title.slice(0,20)}</div>
            <div><b>Category:</b> {data?.content}</div>
            <div><b>Description:</b> {data?.description.slice(0,45)}</div>
            <div><b>Price:</b> {data?.price}</div>
            </div>
            
            
        </div>
    )
}

export default Viewmore