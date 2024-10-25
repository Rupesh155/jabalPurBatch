import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter}   from 'react-router-dom'
import Context, { ContextProvider } from './Context.jsx'
 
createRoot(document.getElementById('root')).render(

     <BrowserRouter> 
  <ContextProvider>   
    <App />
    </ContextProvider>

    </BrowserRouter>

)
