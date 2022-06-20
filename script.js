// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest()

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

// request.onload = function () {
// // Begin accessing JSON data here
// var data = JSON.parse(this.response)

// data.forEach(movie => {
// // Log each movie's title
// console.log(movie.title)
// })
// }

// // Send request
// request.send()

// fetch('https://ghibliapi.herokuapp.com/films')
//   .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
//   .then(data => console.log(data));


const app = document.getElementById('root')
console.log(app)
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

fetch('https://ghibliapi.herokuapp.com/films')
.then((response) => {
   return response.json()
})
.then((data) => {
    // console.log(data)

    data.forEach(movie => {
        console.log(movie.title)

        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        const title = document.createElement('h1')
        title.textContent = movie.title

        const p = document.createElement('p')
        p.textContent = movie.description

        container.appendChild(card)
        card.appendChild(title)
        card.appendChild(p)

})

})
.catch(error => {
    console.log('cannot get data')
})



