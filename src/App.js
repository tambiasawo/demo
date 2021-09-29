import { useContext } from "react";
import Login from "./components/Login";
import MainHeader from "./components/Mainheader";
import LoginContext from "./components/store/LoginContext";
import Home from "./components/Home"

function App() {
  const ctx = useContext(LoginContext)
  //console.log("App: "+ctx.loggedIn)
  return(
    <>
      <MainHeader />
      {!ctx.loggedIn && <Login/>}
      {ctx.loggedIn && <Home/>}
    </>
  );
}

export default App;
