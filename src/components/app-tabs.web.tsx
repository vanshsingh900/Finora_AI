import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui'
import { SymbolView } from 'expo-symbols'
import React from 'react'
import { Pressable, View } from 'react-native'
import { XStack, YStack, Text } from 'tamagui'

import { ExternalLink } from './external-link'

import { MaxContentWidth } from '@/constants/theme'

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  )
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} style={({ pressed }) => pressed && { opacity: 0.7 }}>
      <YStack
        bg={isFocused ? '$backgroundFocus' : '$backgroundHover'}
        py="$1"
        px="$3"
        rounded="$3">
        <Text
          fontSize={14}
          lineHeight={20}
          fontWeight="500"
          color={isFocused ? '$color' : '$color10'}>
          {children}
        </Text>
      </YStack>
    </Pressable>
  )
}

export function CustomTabList(props: TabListProps) {
  return (
    <View
      {...props}
      style={{
        position: 'absolute',
        width: '100%',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <XStack
        bg="$backgroundHover"
        py="$2"
        px="$5"
        rounded="$5"
        items="center"
        grow={1}
        gap="$2"
        maxW={MaxContentWidth}>
        <Text fontSize={14} lineHeight={20} fontWeight="700" mr="auto">
          Expo Starter
        </Text>

        {props.children}

        <ExternalLink href="https://docs.expo.dev" asChild>
          <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 4, marginLeft: 16 }}>
            <Text>Docs</Text>
            <SymbolView
              tintColor="#000"
              name={{ ios: 'arrow.up.right.square', web: 'link' }}
              size={12}
            />
          </Pressable>
        </ExternalLink>
      </XStack>
    </View>
  )
}
