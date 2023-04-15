const parkContainer = document.querySelector('#park-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:8008`


const createParkCard = (park) => {

    const parkCard = document.createElement('div')

    parkCard.classList.add('house-card')

}

const displayParks = (arr) => {
    parkContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
    }
}