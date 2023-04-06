import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import Qualifications from './pages/Qualifications';
import Experience from './pages/Experience';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutme" element={<Aboutme/>}/>
        <Route path="Hobbies" element={<Hobbies/>}/>
        <Route path="Skills" element={<Skills/>}/>
        <Route path="Qualifications" element={<Qualifications/>}/>
        <Route path="Experience" element={<Experience/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
