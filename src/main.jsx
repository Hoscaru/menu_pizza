import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Menu from './menu'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
