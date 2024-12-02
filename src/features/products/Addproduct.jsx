import React from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import { useAddproductMutation } from "../../services/productsApi";

function Addproduct(){
     var [addfn]=useAddproductMutation()
    var initialValues ={
        id:'',
        image:'',
        title:'',
        description:'',
        price:'',
        content:''
    }
    onsubmit = ((values)=>{console.log(values);  addfn(values)})
    var validationSchema = Yup.object({
        id:Yup.string().required('Field is required'),
        image:Yup.string().required('Field is required'),
        title:Yup.string().required('Field is required'),
        description:Yup.string().required('Field is required'),
        price:Yup.string().required('Field is required'),
        content:Yup.string().required('Field is required')
    })
    

    return(
        <div>
            <h1 style={{marginLeft:'400px',marginTop:'25px',color:'white'}}>Add Product</h1>
            <b style={{marginLeft:'400px',marginTop:'25px',color:'white'}}>Fill out the form carefully for registration</b><br/><br/><hr style={{color:'white'}}/>
            
            <Formik initialValues={initialValues} onSubmit={onsubmit} validationSchema={validationSchema}>
                {
                    (ch)=>{
                        return <Form>

                    <div className='container' style={{marginLeft:'420px',marginTop:"-70px"}}>

                        

                        
                            <div class="form-floating mb-3">
                                 <Field type="text" name="title" class="form-control w-50" id="title" placeholder="Title" /><ErrorMessage name='title' component='div' style={{color:'black'}}></ErrorMessage>
                                 <label for="floatingInput">Title</label>
                            </div>

                            <div class="form-floating mb-3">
                                 <Field type="text" name="id" class="form-control w-50" id="id" placeholder="ID" /><ErrorMessage name='id' component='div' style={{color:'black'}}></ErrorMessage>
                                 <label for="floatingInput">ID</label>
                            </div>
                        
                        <div class="form-floating mb-3">
                           <Field type="text" name="image" class="form-control w-50" id="image" placeholder="Image URL" /><ErrorMessage name='image' component='div' style={{color:'black'}}></ErrorMessage>
                           <label for="floatingInput">Image URL</label>
                         </div>


                         <div class="form-floating mb-3">
                           <Field type="text" name="description" class="form-control w-50" id="description" placeholder="Description" /><ErrorMessage name='description' component='div' style={{color:'black'}}></ErrorMessage>
                           <label for="floatingInput">Description</label>
                         </div>

                         <div class="form-floating mb-3">
                           <Field type="text" name="price" class="form-control w-50" id="price" placeholder="Price" /><ErrorMessage name='price' component='div' style={{color:'black'}}></ErrorMessage>
                           <label for="floatingInput">Price</label>
                         </div>

                         <div class="form-floating mb-3">
                           <Field type="text" name="content" class="form-control w-50" id="content" placeholder="Content" /><ErrorMessage name='content' component='div' style={{color:'black'}}></ErrorMessage>
                           <label for="floatingInput">Content</label>
                         </div>
                          

                            <button className="btn btn-success rounded" disabled={!ch.dirty || !ch.isValid} style={{marginLeft:"250px"}}>Register</button><br/><br/><br/><br/><br/>

                            </div>




                        </Form>
                    }
                }
                
                

            </Formik>
            
        </div>
    )
}

export default Addproduct