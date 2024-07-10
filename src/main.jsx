
import React from 'react'
import ReactDom from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles.js'
import  Home  from './pages/Home'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles/>
        <Home/>
    </React.StrictMode>,

)
