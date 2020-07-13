// Step 1

// closest header element to an h1s
let heading = document.querySelector("h1");
// Element closest
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
let header = heading.closest("header");
header.classList.add("borderGray")

// Step 2

//selecting previous element sibling of paragraph element if its parent exists
const infoSection = document.querySelector(".info");
const packages = document.querySelector(".info-package");
const packageTitles = document.querySelectorAll(".package-title");

if (infoSection.contains(packages)) {
    packageTitles.forEach(title => {
        // NonDocumentTypeChildNode.previousElementSibling
        // https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/previousElementSibling
        title.previousElementSibling.classList.add("imgBorder")
    })
}

// Step 3

// matches classes
let labels = document.querySelectorAll(`.info label`);
// Element.match
// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
labels.forEach(label => {
    if (label.matches(".mild")) {
        label.classList.add("borderYellow")
    } else if (label.matches(".intense")) {
        label.classList.add("borderOrange")
    } else {
        label.classList.add("borderRed")
    }
})

// Step 4

// get links of nav and place them in footer
const navList = document.querySelector(".nav-list");
const siteMap = document.querySelector(".site-map");

// ParentNode property children
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children
const listItems = navList.children;

for (let i = 0; i < listItems.length; i++) {
    const item = document.createElement("li");
    item.innerText = listItems[i].innerText;
    siteMap.appendChild(item);
}