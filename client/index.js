const parkContainer = document.querySelector('#park-container')

const baseURL = `http://localhost:8008`

const getParks = () => {
    axios.get(`${baseURL}/parks`)
        .then((res) => {
            displayParks(res.data)
            console.log(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands)
        })
}

const createParkCard = (park) => {
    
    const parkCard = document.createElement('div')

    parkCard.classList.add('park-card')

    parkCard.innerHTML = `
    <img alt='park-image' src=${park.imageURL} class="park-cover-image" onclick="addToPassport(${park.id})"/>   
    `

    parkContainer.appendChild(parkCard)
}

const displayParks = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        createParkCard(arr[i])
    }
}

//click function to add to passport array.
//when clicked option to add notes 


const addToPassport = (id) => {
    axios.post(`${baseURL}/passport/${id}`)
    .then((res) => {
        alert('Park was added to Passport!')
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

getParks()



//<p class="park-name">${park.name}</p>  (can use for names of parks.)