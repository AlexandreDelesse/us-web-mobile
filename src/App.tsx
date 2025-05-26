import { useState } from 'react'
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { RouterProvider } from 'react-router-dom'
import FilterContext from './Contexts/FilterContext'
import { FieldInfos } from './Domain/FormStructure'
import JobEditFormContext from './Contexts/JobEditFormContext'
import { appRouter } from './Router/MainRouter'

const queryClient = new QueryClient()

function App() {
  const [shouldShowJobTerminated, toggleShowJobterminated] = useState(false)
  const [fields, setFields] = useState<FieldInfos[]>([])

  return (
    <QueryClientProvider client={queryClient}>
      <JobEditFormContext.Provider value={{ fields, setFields }}>
        <FilterContext.Provider
          value={{ shouldShowJobTerminated, toggleShowJobterminated }}
        >
          <RouterProvider router={appRouter} />
        </FilterContext.Provider>
      </JobEditFormContext.Provider>
    </QueryClientProvider>
  )
}

export default App
