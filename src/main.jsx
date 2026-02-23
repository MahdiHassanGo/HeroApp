import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";          // use dom for browser router provider
import { router } from './routes/routes.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider renders the matched routes internally */}
    <RouterProvider router={router} />

  </StrictMode>,
)
