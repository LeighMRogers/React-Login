const remoteURL = "http://localhost:8088";

export default {
    addUser(newUser) {
        return fetch(`${remoteURL}/users/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },
    searchUsername(email) {
        return fetch(`${remoteURL}/users?email=${email}`)
        .then(e => e.json()
        )
    }
}