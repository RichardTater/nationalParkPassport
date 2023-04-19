const parkContainer = document.querySelector('#passport-container')

const baseURL = `http://localhost:8008`

const getPassport = () => {
    axios.get(`${baseURL}/passport`)
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

    parkCard.id = `park-${park.id}`

    parkCard.classList.add('park-card')

    parkCard.innerHTML = `
    <img alt='park-image' src=${park.imageURL} class="park-cover-image" onclick="deleteFromPassport(${park.id})"/>
    <textarea id="notes-${park.id}" placeholder="Notes and Experiences Here..." rows="5" cols="70">${park.notes}</textarea>
    <button onclick="updateNotes(${park.id})" type="button" class="btn btn-dark">Save</button>
    `
    
    parkContainer.appendChild(parkCard)
}

const displayParks = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        createParkCard(arr[i])
    }
}

const deleteFromPassport = (id) => {
    if(!confirm("Are you sure you want to DELETE this park from your Passport?")){
        return
    }

    axios.delete(`${baseURL}/passport/${id}`)
    .then((res) => {
        let elemToDelete = document.querySelector(`#park-${id}`)
        elemToDelete.remove()
        console.log(res.data)
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

const updateNotes = (id) => {
    let notesElem = document.querySelector(`#notes-${id}`)
    axios.put(`${baseURL}/passport/${id}`, {notes: notesElem.value})
    .then((res) => {
        alert('Notes were saved!')
    })
    .catch((theseHands) => {
        console.log(theseHands)
    })
}

getPassport()
