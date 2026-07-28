import React, { type ReactNode } from 'react'
import { XStack, YStack, Text } from 'tamagui'

type HintRowProps = {
  title?: string
  hint?: ReactNode
}

export function HintRow({ title = 'Try editing', hint = 'app/index.tsx' }: HintRowProps) {
  return (
    <XStack justify="space-between">
      <Text>{title}</Text>
      <YStack
        bg="$backgroundFocus"
        rounded="$2"
        py={2}
        px="$2">
        <Text color="$color10">{hint}</Text>
      </YStack>
    </XStack>
  )
}
