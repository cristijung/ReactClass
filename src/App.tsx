import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Galeria from './pages/Galeria';
import Contato from './pages/Contato';
import Estados from './pages/Estados';
import NotFound from './pages/NotFound';
import Footer from './Components/Footer/Footer';
import SobreNos from './pages/SobreNos';


function App() {
  return (
   <>
   <BrowserRouter>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> 
          <div style={{ flexGrow: 1 }}> 
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/galeria' element={<Galeria />} />
              <Route path='/contato' element={<Contato />} />
              <Route path='/sobrenos' element={<SobreNos/>} />
              <Route path='/estados' element={<Estados />} />
              <Route path='/*' element={<NotFound />} />
            </Routes> 
          </div>
          <Footer /> 
        </div>
      </BrowserRouter>  
   </>
  );
}

export default App;
