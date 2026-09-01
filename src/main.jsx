import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router}/>
      <GlobalStyles></GlobalStyles>
      <ToastContainer autoClose={3000} theme='colored'/>
    </AppProvider>
  </StrictMode>,
)
