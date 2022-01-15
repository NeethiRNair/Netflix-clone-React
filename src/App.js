import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Components/Movies/Movies';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" >
            
          </Route>
          <Route element={<Movies />} path="/movies" />
            
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
