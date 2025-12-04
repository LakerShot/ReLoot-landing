'use client'

import { YStack, XStack, Text, Button, H1, Paragraph } from '@my/ui'
import { Smartphone } from '@tamagui/lucide-icons'

export function Hero() {
  return (
    <YStack
      tag="section"
      paddingVertical="$10"
      paddingHorizontal="$4"
      alignItems="center"
      justifyContent="center"
      minHeight={500}
      gap="$6"
      backgroundColor="$background"
      $sm={{ paddingVertical: '$6', minHeight: 400 }}
    >
      <YStack alignItems="center" gap="$4" maxWidth={800}>
        <H1
          fontSize="$10"
          fontWeight="800"
          textAlign="center"
          color="$color12"
          $sm={{ fontSize: '$8' }}
        >
          ReLoot — новый шанс для хороших вещей
        </H1>

        <Paragraph
          fontSize="$5"
          textAlign="center"
          color="$color11"
          lineHeight="$6"
          $sm={{ fontSize: '$4' }}
        >
          Помогаем магазинам и кафе продавать товары с уценкой, а покупателям — экономить до 70% без потери качества.
        </Paragraph>

        <XStack gap="$3" flexWrap="wrap" justifyContent="center">
          <Text
            fontSize="$4"
            color="$green10"
            fontWeight="600"
          >
            ♻ Экологично
          </Text>
          <Text fontSize="$4" color="$color8">•</Text>
          <Text
            fontSize="$4"
            color="$green10"
            fontWeight="600"
          >
            💰 Выгодно
          </Text>
          <Text fontSize="$4" color="$color8">•</Text>
          <Text
            fontSize="$4"
            color="$green10"
            fontWeight="600"
          >
            🧠 Умно
          </Text>
        </XStack>
      </YStack>

      <XStack gap="$3" flexWrap="wrap" justifyContent="center">
        <Button
          size="$4"
          backgroundColor="$gray6"
          color="$gray11"
          borderRadius="$4"
          disabled
          opacity={0.7}
          icon={<Smartphone size={18} />}
        >
          Скоро в App Store
        </Button>
        <Button
          size="$4"
          backgroundColor="$gray6"
          color="$gray11"
          borderRadius="$4"
          disabled
          opacity={0.7}
          icon={<Smartphone size={18} />}
        >
          Скоро в Google Play
        </Button>
      </XStack>
    </YStack>
  )
}
