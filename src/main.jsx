import React from 'react'
import ReactDom from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles.js'
import {RouterProvider} from 'react-router-dom'
import Router  from './routes.jsx'
import router from './routes.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles/>
        <RouterProvider router={router}/>
    </React.StrictMode>,

)
