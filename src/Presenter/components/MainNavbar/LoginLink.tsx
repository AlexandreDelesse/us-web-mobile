import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function LoginLink() {
  const navigate = useNavigate()
  return <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
}
