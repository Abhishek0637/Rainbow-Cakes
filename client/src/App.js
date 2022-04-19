import logo from './logo.svg';
import './App.css';
import 'bootstrap';
import {BrowserRouter,Route,Link,Switch,Routes} from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Navbar from './components/Navbar';
import CartPage from './components/cartPage';
import Login from './components/login.js';
import Register from './components/register.js';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
<Routes>
      <Route exact path='/' element={< Home />}></Route>
      <Route exact path='/cart' element={< CartPage />}></Route>
      <Route exact path='/login' element={< Login />}></Route>
      <Route exact path='/register' element={< Register />}></Route>
</Routes>
      </BrowserRouter>
     {/* <Home/> */}

    </div>
  );
}

export default App;
