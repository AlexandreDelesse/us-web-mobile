import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { clearCrew } from '../../../DataSource/localStorage'

export default function LogoutLink() {
  const navigate = useNavigate()
  const onClick = () => {
    clearCrew()
    navigate('/login')
  }

  return <Nav.Link onClick={onClick}>Logout</Nav.Link>
}
