import './styles/index.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomepPage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomepPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
