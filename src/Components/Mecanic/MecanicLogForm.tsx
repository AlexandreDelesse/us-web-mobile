import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import { sendMecanicLog } from '../../Services/mecanic.service'
import { getCrew } from '../../DataSource/localStorage'
import CarCrashIcon from '@mui/icons-material/CarCrash'

interface MecanicLogFormProps {
  refresh: () => any
}

export default function MecanicLogForm(props: MecanicLogFormProps) {
  const [showForm, setShowForm] = useState(false)
  const [constat, setConstat] = useState('')

  const toggleShowForm = () => setShowForm(!showForm)

  const crew = getCrew()

  const handleSend = async () => {
    if (!constat || !crew) return
    try {
      await sendMecanicLog(crew.crewId, constat)
      toggleShowForm()
      props.refresh()
    } catch (error) {
      return
    }
  }

  return (
    <Box>
      {!showForm && (
        <Button
          startIcon={<CarCrashIcon />}
          variant="contained"
          onClick={toggleShowForm}
        >
          Nouvel incident
        </Button>
      )}
      {showForm && (
        <Box sx={{ display: 'flex', gap: 1, flexDirection: 'column' }}>
          <TextField
            onChange={(e) => setConstat(e.target.value)}
            multiline
            rows={4}
            label="Incident"
            placeholder="Décrivez l'incident ici"
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="contained"
              onClick={handleSend}
              startIcon={<SendIcon />}
            >
              Envoyer
            </Button>
            <Button variant="outlined" color="error" onClick={toggleShowForm}>
              Annuler
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  )
}
