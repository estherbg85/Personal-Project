import '../styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import LandingPage  from './pages/LandingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      
      <main>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
