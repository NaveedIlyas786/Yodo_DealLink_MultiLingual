import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './components/SidebarContext'
import AppWithTranslation from './components/AppWithTranslation'
import './utils/i18n'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <SidebarProvider>
          <AppWithTranslation />
        </SidebarProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
