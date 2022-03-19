import { useContext } from 'react'
import { ConfigContext } from '../context'

const useConfig = (): ConfigType => useContext(ConfigContext)

export default useConfig
