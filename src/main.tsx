/* This code snippet is a TypeScript React application that renders the `App` component into the DOM.
Here is a breakdown of what each part of the code is doing: */
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
