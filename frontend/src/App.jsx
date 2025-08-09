import {Navigate, Route,Routes} from "react-router-dom"
import Signup from './pages/Signup'
import Home from './pages/Home'
import Signin from "./pages/Signin"
import Customize from "./pages/Customize"
import { useContext } from "react"
import { userDataContext } from "./context/userContext"
import Customize2 from "./pages/Customize2"


function App() {
 const {userData, setUserData} = useContext(userDataContext)
  return (
  <Routes>
        <Route path='/' element ={(userData?.assistantImage && userData?.assistantName)?<Home/>:<Navigate to={"/customize"}></Navigate>}></Route>
    <Route path='/signup' element ={!userData?<Signup/>:<Navigate to={"/"}></Navigate>}></Route>
    <Route path="/signin" element={!userData?<Signin/>:<Navigate to={"/"}></Navigate>}></Route>
     <Route path="/customize" element={userData?<Customize/>:<Navigate to={"/signup"}></Navigate>}></Route>
        <Route path="/customize2" element={userData?<Customize2/>:<Navigate to={"/signup"}></Navigate>}></Route>
        {/* <Route path="/customize2" element={<Customize2/>}></Route> */}
  </Routes>
  )
}

export default App
