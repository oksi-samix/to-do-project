class Api {

    static loginUser = (email, password) => {
        return fetch('http://localhost:8086/public/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({email, password})
        }).then((data) => {
            if (data.ok) {
                return data.json()
                    .then(data => data)
            } else {
                return data.json()
                    .then((data) => {
                            throw Error(data.error)
                        }
                    )
            }
        })
    };

    static createUser = (firstname, lastname, email, password) => {
        return fetch('http://localhost:8086/public/user', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({firstname, lastname, email, password})
        }).then((data) => {
            if (data.ok) {
                return data.json()
                    .then(data => data)
            } else {
                return data.json()
                    .then((data) => {
                        throw Error(data.error)
                    }
            )
            }
        })

    }
}

export default Api;