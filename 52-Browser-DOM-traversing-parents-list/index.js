//list of all parents Elements


let cite = document.querySelector("cite")
let currentTarget = cite
let parentList = []

while (currentTarget.parentElement) {
    parentList.unshift(currentTarget.parentElement.nodeName.toLowerCase())
    currentTarget = currentTarget.parentElement
}
console.log(parentList)