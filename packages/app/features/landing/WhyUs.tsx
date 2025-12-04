'use client'

import { YStack, XStack, H2, Text, Card } from '@my/ui'
import { Flame, ShoppingBag, Leaf, Zap, Trophy } from '@tamagui/lucide-icons'

const benefits = [
  {
    icon: Flame,
    title: 'Экономия до 70%',
    description: 'Вы получаете отличные товары по минимальной цене.',
    color: '$orange10',
  },
  {
    icon: ShoppingBag,
    title: 'Для бизнеса — новый источник дохода',
    description: 'Уценка превращается в прибыль, а не в списание.',
    color: '$blue10',
  },
  {
    icon: Leaf,
    title: 'Экологично',
    description: 'Мы снижаем объём отходов и помогаем ответственному потреблению.',
    color: '$green10',
  },
  {
    icon: Zap,
    title: 'Удобство и скорость',
    description: 'Всё происходит в приложении: публикация, поиск, бронь, оплата.',
    color: '$yellow10',
  },
  {
    icon: Trophy,
    title: 'Универсальный подход',
    description: 'Сначала еда и товары FMCG, в будущем — техника, одежда, сезонные товары, подарочные наборы и многое другое.',
    color: '$purple10',
  },
]

export function WhyUs() {
  return (
    <YStack
      tag="section"
      id="benefits"
      paddingVertical="$8"
      paddingHorizontal="$4"
      alignItems="center"
      backgroundColor="$gray2"
    >
      <YStack maxWidth={1000} gap="$6" width="100%">
        <H2
          fontSize="$8"
          fontWeight="700"
          textAlign="center"
          color="$color12"
        >
          Почему ReLoot?
        </H2>

        <XStack
          flexWrap="wrap"
          justifyContent="center"
          gap="$4"
        >
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </XStack>
      </YStack>
    </YStack>
  )
}

function BenefitCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: typeof Flame
  title: string
  description: string
  color: string
}) {
  return (
    <Card
      width={280}
      padding="$4"
      backgroundColor="$background"
      borderRadius="$4"
      elevate
      animation="bouncy"
      hoverStyle={{ scale: 1.02, elevation: '$4' }}
      $sm={{ width: '100%' }}
    >
      <YStack gap="$3">
        <XStack
          width={48}
          height={48}
          borderRadius="$3"
          backgroundColor={`${color}`.replace('10', '3')}
          alignItems="center"
          justifyContent="center"
        >
          <Icon size={24} color={color} />
        </XStack>

        <Text fontSize="$5" fontWeight="700" color="$color12">
          {title}
        </Text>

        <Text fontSize="$3" color="$color11" lineHeight="$4">
          {description}
        </Text>
      </YStack>
    </Card>
  )
}
