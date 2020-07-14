let myBody = document.querySelector('body');
myBody.style.fontFamily = 'times'


document.querySelector('.title').style.textAlign = 'center'


let category = [...document.getElementsByClassName('category')]
category.map(function (elem) {
    elem.style.color = 'red'
    elem.style.fontStyle = 'italic'
    elem.style.fontSize = '2em'
})


const colorGenerator = () => {
    let trans = '0.8';
    let color = 'rgba(';
    for (let i = 0; i < 3; i++) {
        color += Math.floor(Math.random() * 255) + ',';
    }
    color += trans + ')';
    return color;
}
let main = document.querySelector('main')
main.style.display = 'flex'
main.style.flexWrap = 'wrap'

let foodCategory = [...document.getElementsByClassName('food-category')]

foodCategory.forEach(element => {
    element.style.backgroundColor = colorGenerator()
    element.style.minWidth = '500px'
    element.style.width = '27%'
    element.style.padding = '20px'
    element.style.margin = '10px'
    element.style.paddingLeft = '50px';
});


let warning = document.getElementById('warning')
warning.style.fontFamily = 'times'
warning.style.fontSize = '2em'

let allergy = document.querySelector('.allergy-warning')

allergy.style.display = 'flex'
allergy.style.flexDirection = 'column'
allergy.style.alignItems = 'center'


let allergyInfo = [...document.getElementsByClassName('allergy-info')]
allergyInfo.forEach(elem => {
    elem.style.listStyle = 'none'
    elem.style.width = '200px'
    elem.style.fontSize = '1.2em'
})
for (let i = 1; i < allergyInfo.length; i += 2) {
    allergyInfo[i].style.backgroundColor = 'purple'
}

let myFooter = document.querySelector('.footer')
myFooter.style.display = 'flex'
myFooter.style.justifyContent = 'center'
myFooter.style.flexWrap = 'wrap'

let footer = [...document.getElementsByClassName('food-desc')]
footer.forEach(function (elem) {
    elem.style.border = '4px solid green'
    elem.style.margin = '1rem'
    elem.style.padding = '50px'
    elem.style.borderRadius = '50%'
    elem.style.height = '7rem'
    elem.style.width = '7rem'
    elem.style.backgroundColor = 'lightblue'
    elem.style.display = 'flex'
    elem.style.justifyContent = 'center'
    elem.style.alignItems = 'center'

})

/* description.forEach(({
    style: desc
}) => {
    desc.border = "5px solid orange";
    desc.borderRadius = "100%";
    desc.height = "7rem";
    desc.width = "7rem";
    desc.display = "flex";
    desc.justifyContent = "center";
    desc.alignItems = "center";
    desc.margin = "1rem";
}); */