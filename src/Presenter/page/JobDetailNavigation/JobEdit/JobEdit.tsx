import JobEditViewModel from './JobEditViewModel'
import FormFactory from './FormFactory/FormFactory'
import { Box, Button } from '@mui/material'
import { FieldInfos } from '../../../../Domain/FormStructure'
import ErrorHandler from '../../../components/ErrorHandler/ErrorHandler'
import LogoLoader from '../../../../SharedComponents/LogoLoader'

export default function JobEdit() {
  const {
    fields,
    handleOnSave,
    error,
    isLoading,
    isRefetching,
    onValueChanges,
    data,
    isPending,
  } = JobEditViewModel()

  if (isLoading || isRefetching) return <LogoLoader />

  if (!data) return <div>No data yet</div>

  if (error) return <ErrorHandler error={error} />

  return (
    <Box sx={{ marginBottom: 7 }}>
      {fields
        .sort((a, b) => a.index - b.index)
        .map((field: FieldInfos) => (
          <FormFactory
            key={field.name}
            componentProps={{
              ...field,
              setValue: onValueChanges,
            }}
            type={field.type}
          />
        ))}
      <Button disabled={isPending} variant="contained" onClick={handleOnSave}>
        Sauvegarder
      </Button>
    </Box>
  )
}
