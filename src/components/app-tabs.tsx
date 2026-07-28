import { NativeTabs } from 'expo-router/unstable-native-tabs'
import React from 'react'
import { useTheme } from 'tamagui'

export default function AppTabs() {
  const theme = useTheme()

  return (
    <NativeTabs
      backgroundColor={theme.background?.val ?? '#fff'}
      indicatorColor={theme.backgroundElement?.val ?? '#f0f0f3'}
      labelStyle={{ selected: { color: theme.color?.val ?? '#000' } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
