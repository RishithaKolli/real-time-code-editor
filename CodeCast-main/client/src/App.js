import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import EditorPage from './components/EditorPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div>
        <Toaster position="top-center"></Toaster>
      </div>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login page */}
        <Route path="/home" element={<Home />} /> {/* Home page */}
        <Route path="/editor/:roomId" element={<EditorPage />} /> {/* Editor page */}
      </Routes>
    </>
  );
}

export default App;
