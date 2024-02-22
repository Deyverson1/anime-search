import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

const root = document.getElementById('root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} else {
  console.error('Element with invalid id root, not founded')
}
