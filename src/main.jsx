import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles.js'
import { ToastContainer } from 'react-toastify'
import AppProvider from './hooks/index.jsx'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig.js'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/themes/standard.js'
import { Router } from './routes/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router></Router>
          </BrowserRouter>
        </Elements>
        <GlobalStyles></GlobalStyles>
        <ToastContainer autoClose={3000} theme='colored'/>
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
)
