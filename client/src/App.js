import './App.css';
import MastheadCompnent from './components/masthead/masthead';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App container-fluid">
      <PrimeReactProvider>
        <BrowserRouter>
          <MastheadCompnent />
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </div >
  );
}

export default App;
