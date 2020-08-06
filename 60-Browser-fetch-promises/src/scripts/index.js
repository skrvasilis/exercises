// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/
let myWindow = document.getElementById('myModal')
let close = document.querySelector('.close')

let window = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                myWindow
            )
        }, 60);
    })
    return promise;
}

window().then(result => {
    result.style.display = 'block'
    close.addEventListener('click', () => {
        result.style.display = 'none'
    })
})