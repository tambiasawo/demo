import React from "react"

const LoginContext = React.createContext({
    loggedIn: false,
    login: (e,p)=>{},
    logout: ()=>{}

})


export default LoginContext
