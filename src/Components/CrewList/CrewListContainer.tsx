import { useEffect, useMemo, useState } from 'react'
import { ICrew } from '../../Models/CrewModel'
import { CrewListPresenter } from '../../Presenters/CrewListPresenter'
import CrewListView from './CrewListView'
import CrewListSkeleton from './CrewListSkeleton'
import ErrorHandler from '../../Presenter/components/ErrorHandler/ErrorHandler'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchBarView from './SearchBarView'
import { Box } from '@mui/material'

export default function CrewListContainer() {
  const [crews, setCrews] = useState<ICrew[]>([])
  const [error, setError] = useState<Error | AxiosError | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const presenter = useMemo(() => {
    return new CrewListPresenter({
      setLoading: setIsLoading,
      showError: setError,
      updateCrewList: setCrews,
    })
  }, [])

  useEffect(() => {
    presenter.init()
  }, [presenter])

  const onMemberClick = (memberName: string | null, crewId: number) => {
    presenter.navigate(crewId, memberName, navigate)
  }

  const onSearch = (filter: string) => {
    presenter.searchCrew(filter)
  }

  if (isLoading) return <CrewListSkeleton />

  if (error) return <ErrorHandler error={error} />

  return (
    <Box padding={2}>
      <SearchBarView onSearch={onSearch} />
      {/* <TestCrewListView crews={crews} /> */}
      <CrewListView crews={crews} onMemberClick={onMemberClick} />
    </Box>
  )
}
