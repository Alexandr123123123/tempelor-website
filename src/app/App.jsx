import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { ServicesPage } from '../pages/Services';
import { BookingModalProvider } from './providers/BookingModalProvider';
import { ChatWidget } from '../widgets/marketing/ChatWidget/ui/ChatWidget';

function App() {
  return (
    <BrowserRouter>
      <BookingModalProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
          <ChatWidget />
        </div>
      </BookingModalProvider>
    </BrowserRouter>
  );
}

export default App;
