import './modules/common.js'
import './scss/main.scss'
import example from './images/example.png'
import example from './images/example.svg'
import './styles/main.css'

const userStack = {
    langueage: 'JavaScript',
    framework: 'Angular'
}

const user = {
    name: 'German',
    age: '19',
    ...userStack
}

console.log(user)