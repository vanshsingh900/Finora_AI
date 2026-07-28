import { version } from 'expo/package.json'
import { Image } from 'expo-image'
import React from 'react'
import { useColorScheme } from 'react-native'
import { YStack, Text } from 'tamagui'

export function WebBadge() {
  const scheme = useColorScheme()

  return (
    <YStack p="$5" items="center" gap="$2">
      <Text fontFamily="$mono" fontSize="$1" color="$color10" text="center">
        v{version}
      </Text>
      <Image
        source={
          scheme === 'dark'
            ? require('@/assets/images/expo-badge-white.png')
            : require('@/assets/images/expo-badge.png')
        }
        style={{ width: 123, aspectRatio: 123 / 24 }}
      />
    </YStack>
  )
}
