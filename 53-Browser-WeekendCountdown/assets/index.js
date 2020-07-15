let inp = document.querySelector('input')
let button = document.querySelector('button')
let h2 = document.querySelector('h2')
myDate = new Date()
myDay = myDate.getDay()
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
dayLeft = weekDay.indexOf('Saturday') - weekDay.indexOf(weekDay[myDay])


button.addEventListener('click', (e) => {
    e.preventDefault()
    if (inp.value) {
        h2.innerText = `Hello ${inp.value}. Today is ${weekDay[myDay]}. Only ${dayLeft} days left until the Weekend!`
        inp.value = ''
    }
})