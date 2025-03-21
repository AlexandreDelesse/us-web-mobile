import MecanicLogs from '../Components/Mecanic/MecanicLogs'
import { api } from './ApiService'

const getMecanicLogs = async (crewId: number) => {
  try {
    const mecanicLogs = await api.get(`MecanicLog/${crewId}`)
    return mecanicLogs.data
  } catch (error) {
    return []
  }
}

const sendMecanicLog = async (crewId: number, constat: string) => {
  try {
    const request = await api.put('MecanicLog', { crewId, constat })
    return request.data
  } catch (error) {
    throw error
  }
}

export { getMecanicLogs, sendMecanicLog }
