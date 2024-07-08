
import React from 'react'
import ReactDom from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles.js'
import  App  from './app.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>,

)
