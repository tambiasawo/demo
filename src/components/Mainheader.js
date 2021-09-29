import { useContext } from "react"
import LoginContext from "./store/LoginContext"
import classes from './css/mainHeader.module.css'

const MainHeader = ()=>{
    const ctx = useContext(LoginContext)

    const clickHandler=(e)=>{
       ctx.logout()
       console.log("logout "+ctx.loggedIn)
    }
    return(
        <header className={classes.header1}>
            <div>
                <h1>TambsSite</h1>
            </div>
            {
                ctx.loggedIn &&
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><button onClick={clickHandler}>Logout</button></li>
                </ul>
            }
        </header>
    )
}

export default MainHeader