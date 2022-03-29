import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

function Entry({ companies = [], onSelectCompany = () => {} }) {
  const navigate = useNavigate()

  const handleChange = (event) => {
    onSelectCompany(event.target.value)
    navigate('billing')
  }

  return (
    <React.Fragment>
      <p>Select a company to show Billing Page</p>
      <Box sx={{ maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Company</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Company"
            onChange={handleChange}
          >
            {companies.map((company) => (<MenuItem key={company.id} value={company}>{company.name}</MenuItem>))}
          </Select>
        </FormControl>
      </Box>
    </React.Fragment>
  )
}

export default Entry
