import { Box } from '@mui/material'
import React from 'react'
import MainNavbarFacade from '../../Presenter/components/MainNavbar/MainNavbarFacade'
import PrivateRoute from '../../Router/PrivateRoute'

export default function MainPage() {
  return (
    <Box
      sx={{ display: 'grid', gridTemplateRows: 'auto 1fr', height: '100vh' }}
    >
      <MainNavbarFacade />

      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <PrivateRoute />
      </Box>
    </Box>
  )
}
