import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
