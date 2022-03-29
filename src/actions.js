import { axios } from './config'

export function getPlans() {
  return axios.get('plans.json')
}

export function getCompanies() {
  return axios.get('companies.json')
}

export function getCards() {
  return axios.get('cards.json')
}
