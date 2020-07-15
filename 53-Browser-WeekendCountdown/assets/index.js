let inp = document.querySelector('input')
let button = document.querySelector('button')
let h2 = document.querySelector('h2')
myDate = new Date()
console.log(myDate)
myDay = myDate.getDay()
let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(weekDay[myDay])
console.log(weekDay.indexOf('Saturday'))
console.log(weekDay.indexOf(weekDay[myDay]))
dayLeft = weekDay.indexOf('Saturday') - weekDay.indexOf(weekDay[myDay])


button.addEventListener('click', (e) => {
    e.preventDefault()
    if (inp.value) {
        h2.innerText = `Hello ${inp.value}. Today is ${weekDay[myDay]}. Only ${dayLeft} days left until the Weekend!`
        inp.value = ''
    }
})