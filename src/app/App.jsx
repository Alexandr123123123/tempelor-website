import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { ServicesPage } from '../pages/Services';
import { BookingModalProvider } from './providers/BookingModalProvider';
import { LanguageProvider } from './providers/LanguageProvider';
import { ChatWidget } from '../widgets/marketing/ChatWidget/ui/ChatWidget';

function App() {
  return (
    <BrowserRouter basename="/tempelor-website/">
      <BookingModalProvider>
        <div className="app">
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="/:lang" element={<LanguageProvider />}>
              <Route index element={<HomePage />} />
              {/* <Route path="services" element={<ServicesPage />} /> */}
            </Route>
          </Routes>
          <ChatWidget />
        </div>
      </BookingModalProvider>
    </BrowserRouter>
  );
}

export default App;
