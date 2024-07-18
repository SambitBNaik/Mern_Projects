import logo from './logo.svg';
import './App.css';
import SalesOrder from './Components/SalesOrder/SalesOrder';
import NavBar from './Components/Navbar/NavBar';
import {BrowserRouter,Router, Route,Routes} from "react-router-dom"
import SideNavbar from './Components/Navbar/SideNavbar';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
            <Routes>
               <Route path='/salesorder' element={<SalesOrder/>}></Route>
            </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
