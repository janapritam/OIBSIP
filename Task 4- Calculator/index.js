function display(value) {
    document.getElementById('textarea').value += value
}

function calculate() {
    var value = document.getElementById('textarea').value
    var answer = eval(value)
    document.getElementById('textarea').value = answer
}

function clr() {
    document.getElementById('textarea').value = ''
}

function hexadecimal() {
    var number = document.getElementById('textarea').value
    document.getElementById('textarea').value = Number(number).toString(16).toUpperCase()
}

function octal() {
    var number = document.getElementById('textarea').value
    document.getElementById('textarea').value = Number(number).toString(8)
}