import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParlourList from './Components/ParlourList/ParlourList';


function App() {
  return (
 <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<ParlourList/>} />
      </Routes>
 </BrowserRouter>

  );
}

export default App;
