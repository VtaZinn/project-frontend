import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import '@fontsource/roboto';
import '@fontsource/roboto/700.css'; 



function App() {
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
