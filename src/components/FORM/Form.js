import React, {useState} from 'react'
import style from "./Form.module.css";

export default function Form() {

    // const [name, setName]= useState("");
    // const [email, setEmail]= useState("");
    // const [password, setPassword]= useState("");

    const [user, setUser] =useState({name : '',email: '',password: ''});
    // destructuring
    const {name, email, password}= user



    // const handleNameChange = (e) =>{
    //     setUser({name:e.target.value, email, password});
         
    // }

    // const handleEmailChange = (e) => {
    //     setUser({name, email: e.target.value, password});
    // }
    // const handlePasswordChange = (e) =>{
    //     setUser({name, email, password: e.target.value});
    // } 


    const handleChange = (e) =>{

        setUser({...user,[e.target.name]: e.target.value});
        // const fieldName = e.target.name;
        // if (fieldName ==='name'){
        //     setUser({name:e.target.value, email, password});
        // } 
        // if(fieldName === 'email'){
        //     setUser({name, email: e.target.value, password});
        // }
        // if(fieldName === 'password'){
        //     setUser({name, email, password: e.target.value});
        // }
       
    };

    const handleSubmit =(e) =>{
        console.log("form is Submitted")
        // object value
        // let userInfo ={
        //     name: name,
        //     email: email,
        //     password: password, 
        // };
        console.log(user);
        e.preventDefault();
    }

  return (
    <div>
        <h1 className={style.heading}>Registration</h1>
        <form action="" onSubmit={handleSubmit}>
         <div className={style.formGroup}>
            <label htmlFor='name'>Name : </label>
            <input type="text" name="name" id="name" value={name} onChange={handleChange} required/>
         </div>
            
         <div className={style.formGroup}>
            <label htmlFor='email'>Email : </label>
            <input type="email" name="email" id="email" value={email} onChange={handleChange} required/>
         </div>

         <div className={style.formGroup}>
            <label htmlFor='password'>Password : </label>
            <input type="password" name="password" id="password" value={password} onChange={handleChange} required/>
         </div>

         <div className={style.formGroup}>
            <button>Register</button>
         </div>

        </form>

    </div>
  )
}
