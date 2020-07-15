let h1 = document.querySelector('h1')

let header = h1.closest("header");
header.classList.add('borderGray')


let infoSection = document.querySelector(".info");
let packages = document.querySelector(".info-package");
let packageTitles = document.querySelectorAll(".package-title");

if (infoSection.contains(packages)) {
    packageTitles.forEach(elem => {
        elem.previousElementSibling.classList.add('imgBorder')
    })
}


let label = document.querySelectorAll('label')
label.forEach(el => {
    if (el.classList.contains('mild')) {
        el.classList.add('borderYellow')
    } else if (el.classList.contains('intense')) {
        el.classList.add('borderOrange')
    } else {
        el.classList.add('borderRed')
    }
})


let navList = document.querySelector('.nav-list')
console.log(navList)

let list = navList.children
console.log(list)
let siteMap = document.querySelector('.site-map')

for (let i = 0; i < list.length; i++) {
    const item = document.createElement("li");
    item.innerText = list[i].innerText;
    siteMap.appendChild(item);
}

console.log(siteMap)