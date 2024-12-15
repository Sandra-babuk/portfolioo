import React from 'react';
import Home from './pages/Home'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>  

      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Skills' element={<Skills/>}></Route>
      <Route path='/Projects' element={<Projects/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>

    </Routes>
    
     
    </>
  );
}

export default App;
