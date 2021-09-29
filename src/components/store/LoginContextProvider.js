import { useState } from "react"
import LoginContext from "./LoginContext"

const LoginContextProvider = (props)=>{
    const [loggedIn, setLoggedIn] = useState(false)
    const loginHandler=(e,p)=>{
        setLoggedIn(true)
        console.log(loggedIn)
    }
    const logoutHandler = ()=>{
        setLoggedIn(false)
        console.log("Logout: "+loggedIn)
    }
    const returnValues={
        loggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return(
        <LoginContext.Provider value={returnValues}>
            {props.children}
        </LoginContext.Provider>
    )

}

export default LoginContextProvider

