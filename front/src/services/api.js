import axios from 'axios'


export let credentials = {
  username: '',
  password: ''
}

const URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:8080'

export const api = axios.create({
  baseURL: URL
})

export const API_REPO_CONFERENCE = '/datarest/conferences'
export const API_REPO_SUBSCRIPTION = '/datarest/subscriptions'
export const API_REPO_SUBSCRIPTION_TYPE = '/datarest/subscriptionTypes'
export const API_SUBSCRIPTION = '/subscription'
export const API_LOGIN = '/login'
export const API_CONFERENCES = '/conferences'
export const API_CONFERENCES_SUBSCRIPTIONS = '/conferences/subscriptions'
export const API_SUBSCRIPTION_VALIDATE = '/subscription/validate'
