import React from "react";
import { useGetKingsQuery } from "../services/KingsApi";
import { Link } from "react-router-dom";

function KingsHome(){

    var {isLoading,data}=useGetKingsQuery()
    console.log(isLoading,data)
    return(
        <div>
            <h1>Rajadi raja rajamarka</h1>
            <Link to="/Addking" className="btn btn-success">Add Maharajas</Link>
            {
                isLoading && <b>Loading...</b>
            }
            {
                !isLoading && (
                    <ul>
                        {
                            data?.map((king)=>{
                               return (
                                <div>
                                   <li>{king?.Name}</li>
                                </div>
                              
                               )
                            })
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default KingsHome;