import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import About from './pages/About';
import PokeGallery from './pages/PokeGallery';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemon" element={<PokeGallery />} />
      </Routes>
    </div>
  );
}

export default App;






// What is JSX
// It's an extention of XML in JavaScript

// This is a function component
// What is a component in React?

// F(D) => UI
// A function that takes data as input and returns a UI