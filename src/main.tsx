import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  /* `<React.StrictMode>` is a component provided by React that helps in highlighting potential
  problems in an application's code. It performs additional checks and warnings during development
  mode to help identify and fix common issues such as unsafe lifecycle methods, legacy string ref
  API usage, and more. It does not affect the production build of the application. */
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
