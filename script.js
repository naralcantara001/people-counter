// let count = document.getElementById('count-el')
let countEl = document.querySelector('#count-el')
let saveBtn = document.querySelector('#save-btn')
let saveEl = document.querySelector('#saveEl')

let count = 0

function increment(){
    count += 1
    countEl.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}