import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import '../node_modules/react-toastify/dist/ReactToastify.css';

const root = createRoot(document.querySelector("#root"))
root.render(<App/>)

