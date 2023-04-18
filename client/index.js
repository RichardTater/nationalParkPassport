const parkContainer = document.querySelector('#park-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:8008`

const getAllParks = () => {
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
        <p class="park-name">${park.name}</p>    
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
        console.log(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

// form.addEventListener()
getAllParks()








// single park card. 
// want picture of park
// want name of park

{/* <img alt='park-image' src=${park.imageURL} class="park-cover-image"/>
            <p class="park-name">${park.name}</p> */}
            