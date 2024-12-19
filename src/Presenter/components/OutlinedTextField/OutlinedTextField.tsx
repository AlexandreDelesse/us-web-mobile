import { TextField } from '@mui/material'
import React from 'react'

interface OutlinedTextFieldProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index?: number) => any
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>
  label: string
  name?: string
  type?: string
  inputLabelprops?: { shrink: boolean }
  error?: boolean
  helperText?: string
  multiline?: boolean
  inputMode?:
    | 'text'
    | 'email'
    | 'tel'
    | 'search'
    | 'url'
    | 'none'
    | 'numeric'
    | 'decimal'
    | undefined
}
export default function OutlinedTextField(props: OutlinedTextFieldProps) {
  const {
    value,
    onChange,
    onKeyUp,
    label,
    type,
    inputLabelprops,
    error,
    helperText,
    multiline,
    inputMode,
    name,
  } = props

  return (
    <TextField
      sx={{ width: '100%', my: 1 }}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      label={label}
      size="small"
      type={type || 'text'}
      InputLabelProps={inputLabelprops}
      error={error || false}
      helperText={helperText || ''}
      multiline={multiline || false}
      rows={3}
      inputMode={inputMode}
      name={name}
    />
  )
}
