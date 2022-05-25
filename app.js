document.querySelector('button').addEventListener('click', generate)

function generate() {
    let sprites = document.querySelector('input').value
    

}

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)
  document.querySelector('img').src = data.sprites
})
.catch(err => {
    console.log(`error ${err}`)
});