import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import React from 'react'
import { TamaguiProvider, useTheme } from 'tamagui'

import tamaguiConfig from '@/../tamagui.config'
import { AnimatedSplashOverlay } from '@/components/animated-icon'
import AppTabs from '@/components/app-tabs'
import { useColorScheme } from '@/hooks/use-color-scheme'

import '@/global.css'

import { ConvexProvider, ConvexReactClient } from "convex/react"

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

function NavigationThemeProvider({
  children,
  colorScheme,
}: {
  children: React.ReactNode
  colorScheme: 'light' | 'dark'
}) {
  const theme = useTheme()
  const dark = colorScheme === 'dark'

  const colors = {
    primary: theme.color?.val ?? (dark ? '#fff' : '#000'),
    background: theme.background?.val ?? (dark ? '#000' : '#fff'),
    card: theme.background?.val ?? (dark ? '#000' : '#fff'),
    text: theme.color?.val ?? (dark ? '#fff' : '#000'),
    border: theme.borderColor?.val ?? '#ccc',
    notification: theme.color?.val ?? (dark ? '#fff' : '#000'),
  }

  const navTheme = {
    dark,
    colors,
    fonts: dark ? DarkTheme.fonts : DefaultTheme.fonts,
  }

  return <ThemeProvider value={navTheme}>{children}</ThemeProvider>
}

export default function TabLayout() {
  const systemColorScheme = useColorScheme()
  const colorScheme = systemColorScheme === 'dark' ? 'dark' : 'light'

  return (
    <ConvexProvider client={convex}>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme}>
        <NavigationThemeProvider colorScheme={colorScheme}>
          <AnimatedSplashOverlay />
          <AppTabs />
        </NavigationThemeProvider>
      </TamaguiProvider>
    </ConvexProvider>
  )
}
