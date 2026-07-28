import { createTamagui, createFont } from 'tamagui'
import { animationsReanimated } from '@tamagui/config/v5-reanimated'
import { defaultConfig } from '@tamagui/config/v5'

const monoFont = createFont({
  family: 'monospace',
  size: {
    1: 12,
    2: 13,
    3: 14,
    4: 15,
    5: 16,
    6: 18,
    7: 22,
    8: 26,
    9: 30,
    10: 40,
    11: 46,
    12: 52,
    13: 60,
    14: 70,
    15: 85,
    16: 100,
  },
  lineHeight: {
    1: 16,
    2: 18,
    3: 20,
    4: 22,
    5: 24,
    6: 26,
    7: 30,
    8: 34,
    9: 38,
    10: 48,
    11: 54,
    12: 60,
    13: 68,
    14: 78,
    15: 93,
    16: 108,
  },
  weight: {
    4: '400',
    7: '700',
  },
  letterSpacing: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
  },
})

const tamaguiConfig = createTamagui({
  ...defaultConfig,
  animations: animationsReanimated,
  fonts: {
    ...defaultConfig.fonts,
    mono: monoFont,
  },
})

export default tamaguiConfig
export type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
