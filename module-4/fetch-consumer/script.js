const url = "http://localhost:5000/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => divResultado.textContent = JSON.stringify(data))
        .catch(error => console.log(error))
}

function getUser() {
    fetch(`${url}/1`)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userOccupation.textContent = data.occupation
            userCity.textContent = data.city
        })
        .catch(error => console.log(error))
}

const newUser = {
    name: "Matheus",
    occupation: "Analista QA",
    city: "Minas Gerais"
}
function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => divResultadoAlert.textContent = data)
        .catch(error => console.log(error))
}

const updatedUser = {
    name: "Matheus Silva",
    occupation: "Analista QA",
    city: "Minas Gerais"
}
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => divResultadoAlert.textContent = data)
        .catch(error => console.log(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => divResultadoAlert.textContent = data)
        .catch(error => console.log(error))
}

deleteUser(3)
// updateUser(updatedUser, 1)
// addUser(newUser)
getUsers()
getUser()