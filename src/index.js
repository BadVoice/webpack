import './modules/common.js'
import './scss/all.scss'
import example from './images/example.png'
import example from './images/example.svg'
import './css/main.css'

const userStack = {
    langueage: 'JavaScript',
    framework: 'React'
}

const user = {
    name: 'German',
    age: '19',
    ...userStack
}

console.log(user)

const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading)


class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.game}.`

// создаем элемент заголовка
const title = document.createElement('h1')
title.textContent = 'Как интересно!'

// добавляем параграф и заголовок в DOM
const roots = document.querySelector('#roots')
roots.append(heading, p)