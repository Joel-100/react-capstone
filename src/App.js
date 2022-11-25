import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar>Component</NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
