import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Pages/intro.css'
import MiniDrawer from './Pages/Menu.tsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Resume from './Buttons/resume.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MiniDrawer />
    <Router>
      <Routes>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
