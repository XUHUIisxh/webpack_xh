import React from 'react'
import ReactDom from 'react-dom'
import ReactApp from './app.jsx'

import {createApp} from 'vue'
import VueApp from './app.vue'


const name = 'kevin_xh'
function logName(name) {
    console.log('name:', name)
}
logName(name)
import './math'

if (module.hot) {
    module.hot.accept("./math.js", () => {
        console.log('math发生了变化')
    })
}

// react
ReactDom.render(<ReactApp />, document.getElementById("app"))


// vue
createApp(VueApp).mount("#root")
