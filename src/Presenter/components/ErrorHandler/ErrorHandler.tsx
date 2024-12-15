import { Alert } from '@mui/material'
import { AxiosError } from 'axios'
import React from 'react'

interface ErrorHandlerProps {
  error: Error | AxiosError | null
  withoutStyle?: boolean
  complementMsg?: string
}
export default function ErrorHandler(props: ErrorHandlerProps) {
  const { error, withoutStyle, complementMsg } = props

  if (!error) return null
  if (!withoutStyle)
    return (
      <Alert sx={{ marginY: 2 }} severity="warning">
        {error.message}
        <div>{complementMsg || ''}</div>
      </Alert>
    )

  return (
    <div>
      {error.message}
      <div>{complementMsg || ''}</div>
    </div>
  )
}
