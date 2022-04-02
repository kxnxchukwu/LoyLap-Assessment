import { axios } from './config'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = "https://deft-croissant-dafcda.netlify.app/backend/";
}

export function getPlans() {
  return axios.get('plans.json')
}

export function getCompanies() {
  return axios.get('companies.json')
}

export function getCards() {
  return axios.get('cards.json')
}
