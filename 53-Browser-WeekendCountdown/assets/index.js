let inp = document.querySelector('input')
let button = document.querySelector('button')
let h2 = document.querySelector('h2')
myDate = new Date()
myDay = myDate.getDay()
// let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// dayLeft = weekDay.indexOf('Saturday') - weekDay.indexOf(weekDay[myDay])

// get the day
const options = {
    weekday: 'long'
}
console.log(myDate.toLocaleDateString(options));

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (inp.value) {
        h2.innerText = `Hello ${inp.value}. Today is ${myDate.toLocaleDateString('en', options)}. Only ${6-myDay} days left until the Weekend!`
        inp.value = ''
    }
})