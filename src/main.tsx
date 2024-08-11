import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// importação nomeada coloca as chaves em volta
import { App } from './app.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
