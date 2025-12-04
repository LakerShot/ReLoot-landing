'use client'

import { XStack, Text, Button } from '@my/ui'
import { Leaf } from '@tamagui/lucide-icons'

export function Header() {
  return (
    <XStack
      tag="header"
      width="100%"
      paddingHorizontal="$4"
      paddingVertical="$3"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="$background"
      position="sticky"
      top={0}
      zIndex={100}
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
    >
      <XStack alignItems="center" gap="$2">
        <Leaf size={28} color="$green10" />
        <Text fontSize="$6" fontWeight="700" color="$color12">
          ReLoot
        </Text>
      </XStack>

      <XStack gap="$4" alignItems="center">
        <Text
          fontSize="$3"
          color="$color11"
          cursor="pointer"
          hoverStyle={{ color: '$green10' }}
        >
          О нас
        </Text>
        <Text
          fontSize="$3"
          color="$color11"
          cursor="pointer"
          hoverStyle={{ color: '$green10' }}
        >
          Преимущества
        </Text>
        <Button
          size="$3"
          backgroundColor="$green9"
          color="white"
          borderRadius="$4"
          hoverStyle={{ backgroundColor: '$green10' }}
        >
          Скоро
        </Button>
      </XStack>
    </XStack>
  )
}
