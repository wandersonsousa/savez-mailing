import { useContext } from 'react'
import { SettingsContext, SettingsContextValue } from 'src/presentation/@core/context/settingsContext'

export const useSettings = (): SettingsContextValue => useContext(SettingsContext)
