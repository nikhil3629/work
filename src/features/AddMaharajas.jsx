import React from "react";
import {Field, Form, Formik} from 'formik'
import { useAddKingsMutation } from "../services/KingsApi";
import { useNavigate } from 'react-router-dom';

function AddMaharajas(){
    
  var [addKingFn] =useAddKingsMutation() ;
  var navigate = useNavigate() 
 

    var initialValues={
        Name:"",
        Gender:"",
        Father:"",
        Mother:"",
        Place:""
    }

    var onSubmit=(values)=>{
      console.log(values)
      addKingFn(values).then((res)=>{navigate('/')})
    }
    return(
       <div>
       <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {
            (ch)=>{
                return <Form>
                <div className="container border border-1 p-4 rounded" style={{width:"900px",marginTop:"150px"}}>
                    <div><center><h1 style={{marginBottom:"30px"}}>The Maharaj</h1></center></div>
                   <div class="form-floating mb-3">
                      <Field type="text" name="Name" class="form-control" id="floatingInput" placeholder="Name"/>
                      <label for="floatingInput">Name</label>
                    </div>
                    <div class="form-floating">
                      <Field type="text" name="Gender" class="form-control" id="floatinggender" placeholder="Gender"/>
                      <label for="floatingPassword">Gender</label>
                    </div><br/>
                    <div class="form-floating">
                      <Field type="text" name="Father" class="form-control" id="floatingfather" placeholder="Father"/>
                      <label for="floatingPassword">Father</label>
                    </div><br/>
                    <div class="form-floating">
                      <Field type="text" name="Mother" class="form-control" id="floatingMother" placeholder="Mother"/>
                      <label for="floatingPassword">Mother</label>
                    </div><br/>
                    <div class="form-floating">
                      <Field type="text" name="Place" class="form-control" id="floatingPlace" placeholder="Place"/>
                      <label for="floatingPassword">Place</label>
                    </div><br/>
                    
                    <center><button className='btn btn-success rounded'>Submit</button></center>
                </div>
                    
                </Form>
            }
        }

       </Formik>
       
       </div>
    )
}

export default AddMaharajas