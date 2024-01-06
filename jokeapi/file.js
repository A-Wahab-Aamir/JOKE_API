
var url="https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Spooky?blacklistFlags=religious,political,explicit&type=single"


let generatejoke = ()  => {

fetch(url)
.then(data => data.json())
.then(item => {

document.getElementById('joke').innerHTML=item.joke

})

} 


generatejoke()