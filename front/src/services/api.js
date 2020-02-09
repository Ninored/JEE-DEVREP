import axios from 'axios'

const baseURL = 'localhost:8081'
const instance = axios.create({
  baseURL,
})

export const API_UTILISATEUR = 'utilisateurs'

export default instance