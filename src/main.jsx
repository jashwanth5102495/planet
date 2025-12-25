import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import Paddy from './pages/Paddy.jsx'
import GroundNut from './pages/GroundNut.jsx'
import Tomato from './pages/Tomato.jsx'
import Okra from './pages/Okra.jsx'
import TomatoMagic from './pages/TomatoMagic.jsx'
import TomatoSPower from './pages/TomatoSPower.jsx'
import TomatoVita from './pages/TomatoVita.jsx'
import CottonHifi from './pages/CottonHifi.jsx'
import SoyabeanSmart from './pages/SoyabeanSmart.jsx'
import PagesIndex from './pages/PagesIndex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Make Paddy the default page at root "/" */}
        <Route path="/" element={<Paddy />} />
        {/* Product-name routes */}
        <Route path="/HUMI-POWER" element={<Paddy />} />
        <Route path="/FORCE" element={<GroundNut />} />
        <Route path="/MAX" element={<Tomato />} />
        <Route path="/UPLUS" element={<Okra />} />
        <Route path="/MAGIC" element={<TomatoMagic />} />
        <Route path="/S-POWER" element={<TomatoSPower />} />
        <Route path="/VITA" element={<TomatoVita />} />
        <Route path="/HIFI" element={<CottonHifi />} />
        <Route path="/SMART" element={<SoyabeanSmart />} />
        <Route path="/pages" element={<PagesIndex />} />
        {/* Redirect any unknown routes to / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
