let a = ''
let b = ''
let sign = ''
let finish = false

const digit = ['0','1', '2', '3', '4', '5','6','7','8','9','.']
const action = ['-', '+', 'x', '/']
const percent = ['%']
const minus = ['+', '-']

const out = document.getElementById('calc-screen')

function clearAll() {
    a = ''
    b = ''
    sign = ''
    finish = false
    out.textContent = '0'
}

document.getElementById('ac').addEventListener('click', clearAll)

document.getElementById('buttons').addEventListener('click', (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains('btn')) {
        return
    }
    // нажата кнопка ac
    if (event.target.classList.contains('ac')) {
        return
    }

    out.textContent = ''
    // получить значение нажатой кнопки
    const key = event.target.textContent

    // если нажата кнопка от 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key
            out.textContent = a
        } 
        else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b
        } 
        else {
            b += key
            out.textContent = b
        }
        console.log (a, sign, b)
        return
        
    }

    // если натажы знаки +-/*
    if (action.includes(key)) {
        sign = key
        out.textContent = sign
        console.log (a, sign, b)
        return
    }

    // если нажат знак %
    if (percent.includes(key)) {
        a = a / 100
        out.textContent = a
        console.log (a, sign, b)
        return
    }

    // нажат знак =
    if (key === '=') {
        if (b === "") {
            b = a
        }

        switch(sign) {
            case "+":
                a = (+a) + (+b)
                break
            case "-":
                a = a - b
                break
            case "x":
                a = a * b
                break
            case "/":
                if (b === '0') {
                    out.textContent = "Ошибка"
                    a = ''
                    b = ''
                    sigh = ''
                    return
                }
                a = a / b
                break
        }
        finish = true
        out.textContent = a
        console.log (a, sign, b)
    }
})