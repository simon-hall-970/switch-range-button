import React from 'react'
import ReactDOM from 'react-dom'
require('../public/css/main.css')

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
})
