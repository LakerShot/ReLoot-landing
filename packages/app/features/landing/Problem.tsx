'use client'

import { YStack, XStack, H2, H3, Paragraph, Text } from '@my/ui'
import { AlertCircle, CheckCircle, MousePointerClick, MapPin, Recycle } from '@tamagui/lucide-icons'

export function Problem() {
  return (
    <YStack
      tag="section"
      paddingVertical="$8"
      paddingHorizontal="$4"
      alignItems="center"
      backgroundColor="$background"
    >
      <YStack maxWidth={900} gap="$8">
        {/* Проблема */}
        <YStack gap="$4" alignItems="center">
          <XStack alignItems="center" gap="$2">
            <AlertCircle size={28} color="$red10" />
            <H2 fontSize="$8" fontWeight="700" color="$color12">
              Проблема
            </H2>
          </XStack>

          <Paragraph
            fontSize="$4"
            textAlign="center"
            color="$color11"
            lineHeight="$5"
            maxWidth={700}
          >
            Каждый день магазины и заведения списывают огромное количество качественных товаров: 
            еды, напитков, аксессуаров, мелкой техники, сезонных товаров. 
            Причины банальны: скорый срок годности, повреждённая упаковка, излишки или необходимость освободить склад.
          </Paragraph>

          <Paragraph
            fontSize="$4"
            textAlign="center"
            color="$red10"
            fontWeight="600"
            lineHeight="$5"
          >
            В результате бизнес теряет деньги, покупатели — возможность выгодных покупок, 
            а экология — тонны ненужных отходов.
          </Paragraph>
        </YStack>

        {/* Решение */}
        <YStack gap="$4" alignItems="center">
          <XStack alignItems="center" gap="$2">
            <CheckCircle size={28} color="$green10" />
            <H2 fontSize="$8" fontWeight="700" color="$color12">
              Наше решение
            </H2>
          </XStack>

          <Paragraph
            fontSize="$4"
            textAlign="center"
            color="$color11"
            lineHeight="$5"
            maxWidth={700}
          >
            ReLoot создаёт прозрачную и быструю систему уценённых продаж:
          </Paragraph>

          <YStack gap="$4" width="100%">
            <SolutionItem
              icon={<MousePointerClick size={24} color="$green10" />}
              text="Продавцы публикуют товары в пару кликов"
            />
            <SolutionItem
              icon={<MapPin size={24} color="$green10" />}
              text="Пользователи находят выгодные предложения рядом с собой"
            />
            <SolutionItem
              icon={<Recycle size={24} color="$green10" />}
              text="Вещи получают второй шанс, а бизнес — дополнительный доход"
            />
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  )
}

function SolutionItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <XStack
      alignItems="center"
      gap="$3"
      padding="$4"
      backgroundColor="$green2"
      borderRadius="$4"
      borderLeftWidth={4}
      borderLeftColor="$green10"
    >
      {icon}
      <Text fontSize="$4" color="$color12" fontWeight="500">
        {text}
      </Text>
    </XStack>
  )
}
