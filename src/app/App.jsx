import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { ServicesPage } from '../pages/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
