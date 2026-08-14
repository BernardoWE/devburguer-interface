import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyles></GlobalStyles>
    <ToastContainer autoClose={3000} theme='colored'/>
  </StrictMode>,
)
