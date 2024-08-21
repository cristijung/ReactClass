import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';
import Artigo from './pages/Artigo';
import NotFound from './pages/NotFound';


function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/galeria' element={<Galeria/>} />
      <Route path='/contato' element={<Contato/>} />
      <Route path='/artigo' element={<Artigo/>} />
      <Route path='/*' element={<NotFound/>} />
   </Routes>     
   </BrowserRouter>   
   </>
  );
}

export default App;
