import { useState } from "react";
import style from "./Form.module.css"
import Validation from "./Validation"; 


const Form = ({login}) => {
const [userData, setUserData]= useState({
    email:"", password:""
})

const [errors, setErrors] = useState({})

 const handleChange = (event) => {
    setErrors(Validation({...userData, [event.target.name]:event.target.value}))
    setUserData({...userData,[event.target.name]:event.target.value})
 }
const handleSubmit = (event) => { 
   { console.log(event)}
    event.preventDefault();
     login(userData)
}

    return(
        <div>
<form className={style.stylLogin}>
    <label className={style.label} htmlFor="email">Email:</label>
    <input className={style.input}type="text" name="email"  value={userData.email} onChange={handleChange}></input>
    
    {errors.ema1 ? ( <p>{errors.ema1}</p>)
    :errors.ema2 ? (<p>{errors.ema2}</p>)
    :(<p>{errors.ema3}</p>)
    }

    <label  className={style.label}htmlFor="password">Password:</label>
    <input className={style.input} type="password" name="password" value={userData.password} onChange={handleChange}></input>

    {errors.pass1 ? ( <p>{errors.pass1}</p>)
        : (<p>{errors.pass2}</p>)
    }
    <button onClick={(event)=>handleSubmit(event)} type="submit" >submit</button>
</form>
        </div>
    )
}

export default Form;