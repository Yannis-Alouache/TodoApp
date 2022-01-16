import axios from 'axios'

export function getList() {
    return axios.get(process.env.REACT_APP_API_URL + "/api/todos/")
}