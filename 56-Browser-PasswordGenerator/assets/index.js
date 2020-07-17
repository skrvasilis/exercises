const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_';


const randomPass = (num, mixedCase) => {
    let arr = []
    console.log(charset.length)
    for (let i = 1; i <= num; i++) {
        let randomNum = Math.floor(Math.random() * charset.length - 1)
        if (mixedCase === true)
            if (i % 3 === 0) {
                arr.push(charset[randomNum].toUpperCase())
            } else {
        arr.push(charset[randomNum])
    }
    }
    return arr.join('')
}




let form = document.querySelector('form')
let password = document.querySelector('.password')
let button = document.querySelector('.button')
let number = document.querySelector('.text')
let numberOfChar = ''
password.innerText = randomPass(20, false)
button.addEventListener('click', (e) => {
    numberOfChar = form.elements["number"].value
    console.log(numberOfChar)
    password.innerText = randomPass(numberOfChar, form.elements['check'].checked)
    form.elements["number"].value = ''
})