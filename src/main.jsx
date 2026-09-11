import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import GlobalStyles from './styles/GlobalStyles.js'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks/index.jsx'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig.js'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <RouterProvider router={router}/>
        </Elements>
        <GlobalStyles></GlobalStyles>
        <ToastContainer autoClose={3000} theme='colored'/>
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
