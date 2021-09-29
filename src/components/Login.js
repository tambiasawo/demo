import React,{useContext, useRef} from "react"
import LoginContext from "./store/LoginContext"
import './css/login.css'

export default function Login(){
    const ctx = useContext(LoginContext)
    const emailRef = useRef("")
    const passwordRef = useRef("")

    const submitHandler = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value
        const password = passwordRef.current.value
        if(email.includes("@") && password.trim().length>2){
            console.log(email,password)
            ctx.login(email,password)
        }
        
    }
    return(
        <form onSubmit = {submitHandler}>
            <label htmlFor = "emailid">Email </label>
            <input type="email" id = "emailid" ref = {emailRef}/>
            <label htmlFor = "passid">Password </label>
            <input type="password" id = "passid" ref = {passwordRef}/>
            <button>Login</button>
        </form>
    )
}