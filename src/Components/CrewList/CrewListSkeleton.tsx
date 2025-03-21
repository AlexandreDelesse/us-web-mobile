import { Grid, Skeleton } from '@mui/material'
import React from 'react'

export default function CrewListSkeleton() {
  return (
    <Grid container padding={2}>
      <Grid item xs={12} sm={6} lg={4}>
        <Skeleton
          sx={{ marginY: 1 }}
          variant="rectangular"
          width={450}
          height={225}
        />
        <Skeleton
          sx={{ marginY: 1 }}
          variant="rectangular"
          width={450}
          height={225}
        />
        <Skeleton
          sx={{ marginY: 1 }}
          variant="rectangular"
          width={450}
          height={225}
        />
      </Grid>
    </Grid>
  )
}
