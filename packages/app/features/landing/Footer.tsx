'use client'

import { YStack, XStack, Text, Anchor, Separator } from '@my/ui'
import { Leaf } from '@tamagui/lucide-icons'

export function Footer() {
  return (
    <YStack
      tag="footer"
      paddingVertical="$6"
      paddingHorizontal="$4"
      alignItems="center"
      backgroundColor="$gray12"
      gap="$4"
    >
      <XStack alignItems="center" gap="$2">
        <Leaf size={24} color="$green10" />
        <Text fontSize="$5" fontWeight="700" color="white">
          ReLoot
        </Text>
      </XStack>

      <Text
        fontSize="$3"
        color="$gray8"
        textAlign="center"
        maxWidth={400}
      >
        Экономим деньги. Сохраняем ресурсы. Даём второй шанс хорошим вещам.
      </Text>

      <Separator backgroundColor="$gray10" width={200} />

      <XStack gap="$4" flexWrap="wrap" justifyContent="center">
        <Anchor
          href="mailto:support@reloot.app"
          color="$gray8"
          fontSize="$3"
          hoverStyle={{ color: '$green10' }}
        >
          Контакты
        </Anchor>
        <Text color="$gray10">•</Text>
        <Anchor
          href="/privacy"
          color="$gray8"
          fontSize="$3"
          hoverStyle={{ color: '$green10' }}
        >
          Политика конфиденциальности
        </Anchor>
        <Text color="$gray10">•</Text>
        <Anchor
          href="mailto:support@reloot.app"
          color="$gray8"
          fontSize="$3"
          hoverStyle={{ color: '$green10' }}
        >
          Поддержка
        </Anchor>
      </XStack>

      <Text fontSize="$2" color="$gray9">
        ReLoot © 2025
      </Text>
    </YStack>
  )
}
