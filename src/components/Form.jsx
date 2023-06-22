import React, { useState } from 'react'
import './Form.css'
function Form() {
    const [take,setTake]=useState(
      {
        username:"",
        password:"",
        gender:"",
        city:"",
        address:"",
        course:[]
      }
    )
    const handelTask=(event)=>{
      setTake({
        ...take,
        [event.target.name]:event.target.value
      })
       
    }
    const submitForm=()=>{
      console.log(take);
    }
  return (
    <div>

 <form  style={{border:'1px solid black',width:"400px",margin:"20px auto",padding:"20px",boxShadow:"0px 0px 10px black"}} action="">

<label>Name</label>
    <input type="text" name="username"  onChange={handelTask} /><br/>

    <label>password</label>

    <input type="password" name="password" onChange={handelTask} /><br/>


    <input type="radio" name="gender" onChange={handelTask} /><label>all</label>
    <input type="radio" name="gender" value='male'  onChange={handelTask}/><label>male</label>
    <input type="radio" name="gender" value='female' onChange={handelTask} /><label>female</label><br/>


    <textarea name="address" id="" cols="30" rows="10" onChange={handelTask}></textarea><br/>
    <select name='city'>
        <option  value="">City</option>
        <option value="Hyderabad">Hyderabad</option>
        <option value="mumbai">Mumbai</option>
        <option value="kochi">Kochi</option>
        <option value="agra">Agra</option>
        <option value="bengaluru">Bengaluru</option>
    </select>
    <input type="checkbox" value='html' name="course" /><label >HTML</label>
    <input type="checkbox" value='Css' name="course" /><label >CSS</label>
    <input type="checkbox" value='js' name="course" /><label >JS</label>
    <input type="checkbox" value='REact.js' name="course"  /><label >REACT.JS</label><br/>
    <button onClick={submitForm}>Register</button>
 </form>

    </div>
  )
}

export default Form