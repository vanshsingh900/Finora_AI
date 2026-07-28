import { SymbolView } from 'expo-symbols'
import { PropsWithChildren, useState } from 'react'
import { Pressable } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { YStack, Text } from 'tamagui'

import { useTheme } from '@/hooks/use-theme'

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()

  return (
    <YStack>
      <Pressable
        style={({ pressed }) => [
          { flexDirection: 'row', alignItems: 'center', gap: 8 },
          pressed && { opacity: 0.7 },
        ]}
        onPress={() => setIsOpen((value) => !value)}>
        <YStack
          bg="$backgroundHover"
          width={24}
          height={24}
          rounded={12}
          justify="center"
          items="center">
          <SymbolView
            name={{ ios: 'chevron.right', android: 'chevron_right', web: 'chevron_right' }}
            size={14}
            weight="bold"
            tintColor={theme.color?.val}
            style={{ transform: [{ rotate: isOpen ? '-90deg' : '90deg' }] }}
          />
        </YStack>

        <Text>{title}</Text>
      </Pressable>
      {isOpen && (
        <Animated.View entering={FadeIn.duration(200)}>
          <YStack
            bg="$backgroundHover"
            mt="$3"
            rounded="$3"
            ml="$4"
            p="$4">
            {children}
          </YStack>
        </Animated.View>
      )}
    </YStack>
  )
}
