import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Library } from './pages/library/library';
function App() {

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="library" exact element={<Library />} />
    </Routes>
  );
}

export default App;
