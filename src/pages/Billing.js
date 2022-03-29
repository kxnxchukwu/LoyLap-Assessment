import * as React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Box from '@mui/material/Box'

function Billing({ plans = [], cards = [], company = null }) {
  const navigate = useNavigate()

  if (!company) {
    navigate('/')
  }

  return (
    <React.Fragment>
      <Link to="/">Go back to select</Link>
      <Box>
        <h3>Current Plan</h3>
        {/*TODO: delete this and replace with your UI component*/} 
        <img src="assets/placeholders/plan_placeholder.svg" alt="Payment plan component placeholder" />

        <h3>Payment Method</h3>
        {/*TODO: delete this and replace with your UI component*/} 
        <img src="assets/placeholders/card_placeholder.svg" alt="Card component placeholder" />
      </Box>
    </React.Fragment>
  )
}

export default Billing
