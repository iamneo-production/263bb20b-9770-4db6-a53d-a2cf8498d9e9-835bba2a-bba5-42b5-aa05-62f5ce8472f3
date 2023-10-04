import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Followus from './pages/Followus';
import Dashboard from './pages/Dashboard'
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Contact from './pages/Contact';


import Dash from './pages/Dash'
import Loginpage from './pages/Loginpage';
import Faq from './pages/Faq';
import Feedback from './pages/Feedback';
import Myservice from './pages/Myservice';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';




function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/log' element={<Login/>}></Route>
    <Route path='/register' element={<Registration/>}></Route>
    <Route path='/our' element={<Services/>}></Route>
    <Route path='/test' element={<Testimonials/>}></Route>
    <Route path='/follow' element={<Followus/>}></Route>
    <Route path='/dash' element={<Dashboard/>}></Route>
    <Route path='/about' element={<Aboutus/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<Loginpage/>}></Route>
    <Route path='/faq' element={<Faq/>}></Route>
    <Route path='/feed' element={<Feedback/>}></Route>
    <Route path='/my' element={<Myservice/>}></Route>
    <Route path='/privacy' element={<Privacy/>}></Route>
    <Route path='/terms' element={<Terms/>}></Route>
    <Route path='/d' element={<Dash/>}></Route>
   
    </Routes>
    </BrowserRouter>
    </div>
   

  );
}

export default App;
