import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Plan from '../components/plan/plan.component'
import PaymentMethod from '../components/payment-method/payment-method.component'

function Billing({ plans = [], cards = [], company = null }) {
  const navigate = useNavigate();
  if (!company) {
    navigate('/')
  }


  return (
    <React.Fragment>
      <Link to="/">Go back to select</Link>
      <Box>
        <h3>Current Plan</h3>
        {/*TODO: delete this and replace with your UI component*/} 
        
        {/* <img src="assets/placeholders/plan_placeholder.svg" alt="Plan component placeholder" /> */}
        {plans.map((plan) => plan.name === company.plan ? <Plan key={company.id} name={plan.name} description={plan.description} value={plan.value} /> : "")}

        <h3>Payment Method</h3>
        {/*TODO: delete this and replace with your UI component*/} 
        {/* <img src="assets/placeholders/card_placeholder.svg" alt="Card component placeholder" /> */}
        {cards.map((card) => card.companyId === company.id ? <PaymentMethod type={card.type} expiry={card.expiry} lastFour={card.lastFour}/> : "")}
        
      </Box>
    </React.Fragment>
  )
}

export default Billing
