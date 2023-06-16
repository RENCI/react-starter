import { App } from './app'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

const ProvisionedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

root.render(<ProvisionedApp />)
