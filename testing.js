let parks = require('./server/db.json')

let rando = Math.floor(Math.random() * parks.length)

console.log(rando)

let index = 0

for(let i = 0; i < parks.length; i++){
    if(parks[i].id === rando){
        index = i
    }
}
console.log(parks[index])

let asdf = parks.findIndex((el) => el.id === rando)

console.log(parks[asdf])
