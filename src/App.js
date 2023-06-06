import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Fotos from './pages/fotos/fotos';
import Comments from './pages/comments/comments';
import Contato from './pages/contato/contato';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/fotos' element={<Fotos />} />
        <Route path='/comentarios' element={<Comments />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;