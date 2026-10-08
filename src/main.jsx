
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MainContextApi } from './context/MainContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <MainContextApi>
    <App />
  </MainContextApi>,
)
