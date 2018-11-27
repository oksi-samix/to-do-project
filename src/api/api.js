class Api {

    static loginUser = (email, password) => {
        return fetch('http://localhost:8086/public/login', {
            method: 'POST',
            credentials: 'include',
            headers:{
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({ email, password })
        }).then(data => data.json()).then(data => data);
    }
}

export default Api;