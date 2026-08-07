import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Login} from './container/Login/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
