import { Image } from 'expo-image'
import { SymbolView } from 'expo-symbols'
import React from 'react'
import { Platform, Pressable, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { YStack, XStack, Text, Heading, Paragraph } from 'tamagui'

import { ExternalLink } from '@/components/external-link'
import { WebBadge } from '@/components/web-badge'
import { Collapsible } from '@/components/ui/collapsible'
import { BottomTabInset, MaxContentWidth } from '@/constants/theme'
import { useTheme } from '@/hooks/use-theme'

export default function TabTwoScreen() {
  const safeAreaInsets = useSafeAreaInsets()
  const insets = {
    ...safeAreaInsets,
    bottom: safeAreaInsets.bottom + BottomTabInset + 16,
  }
  const theme = useTheme()

  const contentPlatformStyle = Platform.select({
    android: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
    web: {
      paddingTop: 64,
      paddingBottom: 24,
    },
  })

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.background?.val }}
      contentInset={insets}
      contentContainerStyle={[
        { flexDirection: 'row', justifyContent: 'center' },
        contentPlatformStyle,
      ]}>
      <YStack maxW={MaxContentWidth} grow={1}>
        <YStack gap="$3" items="center" px="$4" py="$6">
          <Heading size="$9">Explore</Heading>
          <Paragraph text="center" color="$color10">
            This starter app includes example{'\n'}code to help you get started.
          </Paragraph>

          <ExternalLink href="https://docs.expo.dev" asChild>
            <Pressable style={({ pressed }) => pressed && { opacity: 0.7 }}>
              <XStack
                bg="$backgroundHover"
                px="$4"
                py="$2"
                rounded="$5"
                justify="center"
                gap="$1"
                items="center">
                <Text>Expo documentation</Text>
                <SymbolView
                  tintColor={theme.color?.val}
                  name={{ ios: 'arrow.up.right.square', android: 'link', web: 'link' }}
                  size={12}
                />
              </XStack>
            </Pressable>
          </ExternalLink>
        </YStack>

        <YStack gap="$5" px="$4" pt="$3">
          <Collapsible title="File-based routing">
            <Paragraph size="$2">
              This app has two screens: <Text fontFamily="$mono">src/app/index.tsx</Text> and{' '}
              <Text fontFamily="$mono">src/app/explore.tsx</Text>
            </Paragraph>
            <Paragraph size="$2">
              The layout file in <Text fontFamily="$mono">src/app/_layout.tsx</Text> sets up
              the tab navigator.
            </Paragraph>
            <ExternalLink href="https://docs.expo.dev/router/introduction">
              <Text color="$blue10">Learn more</Text>
            </ExternalLink>
          </Collapsible>

          <Collapsible title="Android, iOS, and web support">
            <YStack bg="$backgroundHover" items="center">
              <Paragraph size="$2">
                You can open this project on Android, iOS, and the web. To open the web version,
                press <Paragraph size="$2" fontWeight="700">w</Paragraph> in the terminal running this
                project.
              </Paragraph>
              <Image
                source={require('@/assets/images/tutorial-web.png')}
                style={{ width: '100%', aspectRatio: 296 / 171, borderRadius: 16, marginTop: 8 }}
              />
            </YStack>
          </Collapsible>

          <Collapsible title="Images">
            <Paragraph size="$2">
              For static images, you can use the <Text fontFamily="$mono">@2x</Text> and{' '}
              <Text fontFamily="$mono">@3x</Text> suffixes to provide files for different
              screen densities.
            </Paragraph>
            <Image source={require('@/assets/images/react-logo.png')} style={{ width: 100, height: 100, alignSelf: 'center' }} />
            <ExternalLink href="https://reactnative.dev/docs/images">
              <Text color="$blue10">Learn more</Text>
            </ExternalLink>
          </Collapsible>

          <Collapsible title="Light and dark mode components">
            <Paragraph size="$2">
              This template has light and dark mode support. The{' '}
              <Text fontFamily="$mono">useColorScheme()</Text> hook lets you inspect what the
              user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
            </Paragraph>
            <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
              <Text color="$blue10">Learn more</Text>
            </ExternalLink>
          </Collapsible>

          <Collapsible title="Animations">
            <Paragraph size="$2">
              This template includes an example of an animated component. The{' '}
              <Text fontFamily="$mono">src/components/ui/collapsible.tsx</Text> component uses
              the powerful <Text fontFamily="$mono">react-native-reanimated</Text> library to
              animate opening this hint.
            </Paragraph>
          </Collapsible>
        </YStack>
        {Platform.OS === 'web' && <WebBadge />}
      </YStack>
    </ScrollView>
  )
}
