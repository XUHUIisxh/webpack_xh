import "../css/index.css"
import "../css/component.less"

function component() {
    const element = document.createElement('div')

    element.innerHTML = ['hello', 'webpack'].join(" ")
    element.className = 'content'


    const imgEl = new Image()
    imgEl.src = require('../img/img1.jpg')
    element.appendChild(imgEl)

    
    const bgDiv = document.createElement('div')
    bgDiv.style.width = 200 + 'px'
    bgDiv.style.height = 200 + 'px'
    bgDiv.className = 'bg-image'
    bgDiv.style.backgroundColor = 'red'
    element.appendChild(bgDiv)


    return element
}

document.body.appendChild(component())


