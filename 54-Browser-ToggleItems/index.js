let li = document.querySelectorAll('.list')
let show = document.querySelector('.box')
let ul = document.querySelector('ul')
let hide = document.querySelector('.box2')
let select = document.querySelector('.select')


show.addEventListener('click', (e) => {
    ul.classList.toggle('none')
    show.classList.add('none')
    hide.classList.toggle('none')
})

hide.addEventListener('click', (e) => {
    ul.classList.toggle('none')
    hide.classList.add('none')
    show.classList.remove('none')
    select.classList.add('none')
})

li.forEach(elem => {
    elem.addEventListener('click', (e) => {
        let active = document.querySelector('.bc')
        active.classList.remove('bc')
        e.target.classList.add('bc')
        console.log(e.target)
        select.innerText = `You selected ${e.target.innerText}`
    })
})