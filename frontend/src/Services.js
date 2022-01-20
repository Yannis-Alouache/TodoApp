import axios from 'axios'

export function getList() {
  return axios.get(process.env.REACT_APP_API_URL + "/api/todos/")
}

export function postTask(data) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return axios.post(process.env.REACT_APP_API_URL + "/api/todos/", data, {
    headers: headers
  })
}

export function deleteTask(itemId) {
  return axios.delete(process.env.REACT_APP_API_URL + "/api/todos/" + itemId + "/")
}

export function editTask(itemId, data) {
  const headers = {
    'Content-Type': 'application/json'
  }

  return axios.put(process.env.REACT_APP_API_URL + "/api/todos/" + itemId + "/", data, {
    headers: headers
  })

}