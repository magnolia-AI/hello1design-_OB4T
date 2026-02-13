import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import RootLayout from './layouts/RootLayout'
import HomePage from './pages/HomePage'
import ProjectDetail from './pages/ProjectDetail'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* Static Design Routes */}
          <Route path="/project-1" element={<ProjectDetail />} />
          <Route path="/project-2" element={<ProjectDetail />} />
          <Route path="/project-3" element={<ProjectDetail />} />
          <Route path="/project-4" element={<ProjectDetail />} />
          <Route path="/project-5" element={<ProjectDetail />} />
          <Route path="/project-6" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
