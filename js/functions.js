var clicks = 0
var clicks2 = 0

var counter = document.getElementById('counter')
var counter2 = document.getElementById('counter2')

function addClick() {
    clicks++
    counter.innerHTML = clicks
}

function addClick2() {
    clicks2++
    counter2.innerHTML = clicks2
}

var el = document.getElementById('cat-pic')
el.addEventListener('click', addClick, false)

var el2 = document.getElementById('cat-pic2')
el2.addEventListener('click', addClick2, false)