import "../styles/main.scss";
import "babel-polyfill"

const modal = document.getElementById("myModal");


let promiseOfModal = new Promise(function (resolve) {
    window.setTimeout(function () {
        resolve(modal)
    }, (6000));
});
let asyncCode = async () => {
    console.log("User has been on the page for 60 seconds");
   let result = await promiseOfModal
    result.style.display = 'block' 
}

asyncCode()
/* promiseOfModal.then(function (val) {
    console.log("User has been on the page for 60 seconds");
    val.style.display = "block";
})
 */
modal.addEventListener("click", (e) => {
    switch (e.target.className) {
        case "close":
        case "modal":
            modal.style.display = "none"
            break;
    }
})

let button = document.getElementById('continue');

function buttonAlert() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(alert("Continue to subscription!"));
        }, 200);
    });
}

button.addEventListener('mouseover',(e)=>{
    let buttonAsync = async () =>{
        let result = await buttonAlert()
    }
    buttonAsync()
})





