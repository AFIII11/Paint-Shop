import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route}from'react-router-dom'
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Registration from './Register';
import Color from './Color';
import Fec from './Fec';
import Form from './Form';
import View from './View';
import Editpaint from './Editpaint';
import Profile from './Profile';
import Contact from './Contact';



function App() {
  return (
<>
    <BrowserRouter>
    <Routes>
    <Route path='/nav'element={<Nav></Nav>}/>
    <Route path='/'element={<Home></Home>}/>  
    <Route path='/login'element={<Login></Login>}/>  
    <Route path='/register'element={<Registration></Registration>}/>  
    <Route path='/color'element={<Color></Color>}/>  
    <Route path='/fec'element={<Fec></Fec>}/>  
    <Route path='/form'element={<Form></Form>}/>  
    <Route path='/view'element={<View></View>}/>  
    <Route path='/edit/:id'element={<Editpaint/>}/>  
    <Route path='/profile'element={<Profile></Profile>}/>  
    <Route path='/contact'element={<Contact></Contact>}/>  
    
    
      
      
     
      
      
      
  
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
