import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
