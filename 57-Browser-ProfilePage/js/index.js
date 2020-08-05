// Your JS here!
let form = document.querySelector('form')
let cv = document.querySelector('.cv')



let h1 = document.querySelector('.myName')
let h2 = document.querySelector('.age')
let image = document.querySelector('img')
let paragraph = document.createElement('p')
let skills = document.createElement('p')


form.addEventListener("submit", (e) => {
    e.preventDefault()
    cv.style.display = 'flex'
    console.log(form.elements['name'].value)
    h1.innerHTML = form.elements['name'].value
    console.log(form.elements['date'].value)
    let birthday = new Date(form.elements['date'].value)
    let today = new Date()
    let ageUser = today.getFullYear() - birthday.getFullYear();
    h2.innerHTML = `${h1.innerHTML} is ${ageUser} years old`
    console.log(form.elements['file'].value)
    console.log(form.elements['primaryColor'].value)
    cv.style.backgroundColor = form.elements['primaryColor'].value
    console.log(form.elements['secondaryColor'].value)
    cv.style.color = form.elements['secondaryColor'].value
    console.log(form.elements['textArea'].value)
    paragraph.innerHTML = form.elements['textArea'].value
    let javascript = ''
    let python = ''
    let ruby = ''
    let java = ''
    let php = ''
    if (form.elements['javascript'].checked) {
        javascript = 'javascript'
    }
    if (form.elements['python'].checked) {
        python = 'python'
    }
    if (form.elements['ruby'].checked) {
        ruby = 'ruby'
    }
    if (form.elements['java'].checked) {
        java = 'java'
    }
    if (form.elements['php'].checked) {
        php = 'PHP'
    }
    skills.innerHTML = `${h1.innerHTML} skills of are: ${javascript} ${ruby} ${python} ${java} ${php}`
    cv.appendChild(paragraph)
    cv.appendChild(skills)
})

form.addEventListener('reset', (e) => {

})