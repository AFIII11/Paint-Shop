import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Nav from './Nav';
import Login from './MAIN/Login/Login';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'element={<Nav></Nav>}></Route>
    <Route path='/login'element={<Login></Login>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
