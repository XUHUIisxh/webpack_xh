import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactApp from './app.jsx'
import _ from 'lodash'

import { createApp } from 'vue'
import VueApp from './app.vue'

console.log(_.join(["name", "index"]))

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
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<ReactApp tab="home" />);


// vue
createApp(VueApp).mount("#root")
