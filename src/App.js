import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'
import Entry from './pages/Entry'
import Billing from './pages/Billing'
import { getPlans, getCompanies, getCards } from './actions'

function App() {
  const [companies, setCompanies] = useState([])
  const [company, setCompany] = useState(null)
  const [plans, setPlans] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    Promise.all([getPlans(), getCompanies(), getCards()]).then(
      ([plansRes, companiesRes, cardsRes]) => {
        setPlans(plansRes.data)
        setCompanies(companiesRes.data)
        setCards(cardsRes.data)
      }
    )
  }, [])

  return (
    <Container className="App">
      <h1>Welcome to LoyLap's Assessment</h1>
      <Routes>
        <Route path="/" element={<Entry companies={companies} onSelectCompany={setCompany} />} />
        <Route path="billing" element={<Billing plans={plans} cards={cards} company={company} />} />
      </Routes>
    </Container>
  )
}

export default App
