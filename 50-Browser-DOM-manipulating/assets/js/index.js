const books = [{
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

let ul = document.querySelector('.book-list')
ul.style.display = 'flex'
ul.style.flexWrap = 'noWrap'
ul.style.justifyContent = 'space-around'



books.map(elem => {
  let card = document.createElement("li")
  let image = document.createElement("img")
  let h2 = document.createElement("h2")
  let h3 = document.createElement("h3")
  let p = document.createElement('p')
  h2.innerHTML = elem.title
  image.setAttribute("src", elem.img)
  h3.innerHTML = elem.author
  p.innerHTML = elem.alreadyRead ? 'read' : 'to read'
  p.style.backgroundColor = elem.alreadyRead ? 'green' : 'grey'

  card.append(image, h2, h3, p)
  ul.appendChild(card)
})




let li = [...document.querySelectorAll('li')]
console.log(li)
 li.map(element => {
  element.style.margin = '20px'
   element.style.width = '200px'
   element.style.marginLeft = '50px'
});

let image = [...document.querySelectorAll('img')]
image.map(el => {
  el.style.border = '4px solid black'
  el.style.width = '300px'
  el.style.height = '500px'
})

let read = [...document.querySelectorAll('p')]
read.map(el=> {
  el.style.color = 'white'
})