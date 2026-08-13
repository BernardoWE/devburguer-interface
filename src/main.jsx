import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Login} from './container/Login/index.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
    <GlobalStyles></GlobalStyles>
    <ToastContainer/>
  </StrictMode>,
)
