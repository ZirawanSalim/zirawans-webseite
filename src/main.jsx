import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Router } from 'react-router-dom'
import './index.css'
import "./Übungen/datenTypen.js"
import { Provider } from "@chakra-ui/react";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
       <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)



