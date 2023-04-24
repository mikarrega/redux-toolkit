import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from '../src/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* interface irá ler os valores do reducer através do provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
