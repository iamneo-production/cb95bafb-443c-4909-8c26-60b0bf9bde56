import Navbar from "./Navbar";
import Admin from "./Admin";
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";
import Adminmod from "./Adminmod";
import SignUp from "./SignUp";
import Home from "./Home";
import Display from "./Display";
const App=()=>{
  return (
    <div className="app">
      <Navbar/>
      {/* <Login/> */}
      <BrowserRouter>
                <Routes>
                  <Route path="/" exact element={<Home/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/admin" exact element={<Admin/>}/>
                    <Route path="/adminmod" exact element={<Adminmod/>}/>
                    <Route path="/signup" exact element={<SignUp/>}/>
                    <Route path="/cart" exact element={<Display/>}/>
                    <Route path="/order" exact element={<Cart/>}/>
                </Routes>
        </BrowserRouter>
    </div>

  )
}
export default App