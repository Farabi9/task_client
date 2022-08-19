
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import SignUp from './Auth/Signup';
import Footer from './Home/Footer';
import Home from './Home/Home';
import Navber from './Home/Navber'





function App() {
 
  return (
    <div className="App">
      <Navber></Navber>
         <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
         </Routes>
         <Footer></Footer>
    </div>
  );
}

export default App;
