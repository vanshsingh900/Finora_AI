import * as Device from 'expo-device'
import { Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { YStack, Text, Heading, Paragraph } from 'tamagui'

import { AnimatedIcon } from '@/components/animated-icon'
import { HintRow } from '@/components/hint-row'
import { WebBadge } from '@/components/web-badge'
import { BottomTabInset, MaxContentWidth } from '@/constants/theme'

function getDevMenuHint() {
  if (Platform.OS === 'web') {
    return <Paragraph size="$2">use browser devtools</Paragraph>
  }
  if (Device.isDevice) {
    return (
      <Paragraph size="$2">
        shake device or press <Text fontFamily="$mono">m</Text> in terminal
      </Paragraph>
    )
  }
  const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d'
  return (
    <Paragraph size="$2">
      press <Text fontFamily="$mono">{shortcut}</Text>
    </Paragraph>
  )
}

export default function HomeScreen() {
  return (
    <YStack flex={1} justify="center" flexDirection="row">
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 24,
          alignItems: 'center',
          gap: 16,
          paddingBottom: BottomTabInset + 16,
          maxWidth: MaxContentWidth,
        }}>
        <YStack items="center" justify="center" flex={1} px={24} gap="$4">
          <AnimatedIcon />
          <Heading size="$12" text="center">Welcome to Expo</Heading>
        </YStack>

        <Text fontFamily="$mono" fontSize="$1" textTransform="uppercase">
          get started
        </Text>

        <YStack
          bg="$backgroundHover"
          gap="$3"
          self="stretch"
          px="$4"
          py="$5"
          rounded="$4">
          <HintRow
            title="Try editing"
            hint={<Text fontFamily="$mono">src/app/index.tsx</Text>}
          />
          <HintRow title="Dev tools" hint={getDevMenuHint()} />
          <HintRow
            title="Fresh start"
            hint={<Text fontFamily="$mono">npm run reset-project</Text>}
          />
        </YStack>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </YStack>
  )
}
