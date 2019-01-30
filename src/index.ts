import { app } from 'hyperapp'
import { location } from '@hyperapp/router'

import App from './app'

const main = app(
    App.state, 
    App.actions, 
    App.view, 
    document.getElementById('app')
)
const unsubscribe = location.subscribe(main.location)

console.log("hello")
