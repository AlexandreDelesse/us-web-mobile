import { useEffect, useState } from 'react'
import { getMecanicLogsByCrewId } from '../../Services/mecanic.service'
import { getCrew } from '../../DataSource/localStorage'
import { MecanicLog } from './MecanicLog'
import { Alert, AlertTitle, Box, Typography } from '@mui/material'
import MecanicLogForm from './MecanicLogForm'

export default function MecanicLogs() {
  const [mecanicLogs, setMecanicLogs] = useState<MecanicLog[]>([])
  const [refresh, setRefresh] = useState(false)
  const crew = getCrew()

  useEffect(() => {
    if (!crew) return
    getMecanicLogsByCrewId(crew.crewId).then((data) => setMecanicLogs(data))
  }, [refresh])

  const mecanicLogList = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
      {mecanicLogs.map((mecanicLog) => (
        <Alert severity={getLogStatus(mecanicLog.state)} key={mecanicLog.id}>
          <AlertTitle>
            {new Date(mecanicLog.lastStateDate).toLocaleDateString()}
          </AlertTitle>
          {mecanicLog.constat}
        </Alert>
      ))}
    </Box>
  )

  const emptyListComponent = (
    <Box>
      <Typography marginY={4} textAlign="center">
        Aucun incident en cours
      </Typography>
    </Box>
  )

  return (
    <Box>
      <MecanicLogForm refresh={() => setRefresh(!refresh)} />
      <Typography variant="h5" fontSize={18} sx={{ my: 1 }}>
        Incidents en cours
      </Typography>
      {mecanicLogs.length < 1 ? emptyListComponent : mecanicLogList}
    </Box>
  )
}

const getLogStatus = (logStatus: number) => {
  switch (logStatus) {
    case 1:
      return 'warning'
    case 2:
      return 'info'
    case 3:
      return 'success'

    default:
      return 'info'
  }
}
