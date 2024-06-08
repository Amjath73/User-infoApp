import React, { useState } from 'react'
import NavBar from './NavBar'

const AddUser = () => {
    const[data,setData]=useState(
        {
            "id":"",
            "email":"",
            "first_name":"",
            "last_name":""
        }
    )
    const inputHandler = (event)=>{
        setData({...data,[event.target.name]: event.target.value})
    }
    const readValue = ()=> {
        console.log(data)
    }
  return (
    <div>
        <NavBar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">id</label>
                        <input type="text" className="form-control" name='id' onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="text" className="form-control" name='email' onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">first_name</label>
                    <input type="text" className="form-control" name='first_name' onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">last_name</label>
                    <input type="text" className="form-control" name='last_name' onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValue}>Add</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default AddUser
