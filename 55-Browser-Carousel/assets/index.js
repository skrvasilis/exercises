let image = [...document.getElementsByClassName('slide-img')]


let buttonLeft = document.querySelector('.button-left')

let buttonRight = document.querySelector('.button-right')

console.log(image[1].className)

let n = 1;
console.log(n)


buttonLeft.addEventListener('click', (e) => {
   
    if (n === 1) {
        console.log(1)
        image[0].classList.add('none')
        image[1].classList.remove('none')
    } 
    if (n === 2) {
        console.log(2)
        image[1].classList.add('none')
        image[2].classList.remove('none')
    } 
    if (n === 3) {
        image[2].classList.add('none')
        image[0].classList.remove('none')
        console.log(3)
    }
    n++
})