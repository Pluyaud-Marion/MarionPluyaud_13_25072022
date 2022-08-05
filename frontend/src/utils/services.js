import axios from "axios"

/**
 * 
 * @param {Object} login (email, password)
 * @returns result of call Api login = token
 */
export const getToken = (login) => {
    return axios.post("http://localhost:3001/api/v1/user/login", login)
        .then(res => res.data.body)
        .catch(error => console.log(error))
}

/**
 * Take in localstorage token of the user for headers of request
 * @returns result of call Api profile = infos of user
 */
export const logUser = () => {
    const tokenLS = JSON.parse(localStorage.getItem("token"))
    const token = tokenLS.token

    return axios({
        method: 'post',
        url: "http://localhost:3001/api/v1/user/profile",
        headers: { Authorization: `Bearer ${token}` }
    })
        .then(res => res.data)
        .catch(error => console.log(error))
}

/**
 * 
 * @param {Object} newData new firstname and lastname of user
 * @returns result of call Api update user = the new name of the user
 */
export const editUser = (newData) => {
    const tokenLS = JSON.parse(localStorage.getItem("token"))
    const token = tokenLS.token

    return axios({
        method: 'put',
        url: "http://localhost:3001/api/v1/user/profile",
        headers: { Authorization: `Bearer ${token}` },
        data: newData
    })
        .then(res => res)
        .catch(error => console.log(error))
}
