import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { getCrew } from '../DataSource/localStorage'
import MainNavbarFacade from '../Presenter/components/MainNavbar/MainNavbarFacade'

export default function PrivateRoute() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/regul') return
    const crew = getCrew()
    if (!crew) navigate('/login', { replace: true })
  }, [navigate])

  return (
    <>
      <MainNavbarFacade />
      <Box sx={{ padding: '16px' }}>
        <Outlet />
      </Box>
    </>
  )
}
