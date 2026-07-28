import { useSyncExternalStore } from 'react'
import { useColorScheme as useRNColorScheme } from 'react-native'

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return () => {}
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const listener = () => onStoreChange()

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', listener)
    return () => mediaQuery.removeEventListener('change', listener)
  }

  mediaQuery.addListener(listener)
  return () => mediaQuery.removeListener(listener)
}

function getSnapshot() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useColorScheme() {
  const colorScheme = useRNColorScheme()
  const webColorScheme = useSyncExternalStore(subscribe, getSnapshot, () => 'light')

  return colorScheme ?? webColorScheme
}
