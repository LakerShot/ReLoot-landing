'use client'

import { YStack, H2, Paragraph } from '@my/ui'

export function AboutUs() {
  return (
    <YStack
      tag="section"
      id="about"
      paddingVertical="$8"
      paddingHorizontal="$4"
      alignItems="center"
      backgroundColor="$gray2"
    >
      <YStack maxWidth={800} gap="$4">
        <H2
          fontSize="$8"
          fontWeight="700"
          textAlign="center"
          color="$color12"
        >
          Кто мы
        </H2>

        <Paragraph
          fontSize="$4"
          textAlign="center"
          color="$color11"
          lineHeight="$5"
        >
          ReLoot — это сервис, который объединяет магазины, пекарни, кафе и другие точки продаж, 
          чтобы легко и законно избавляться от остатков и товаров с уценкой.
        </Paragraph>

        <Paragraph
          fontSize="$4"
          textAlign="center"
          color="$color11"
          lineHeight="$5"
        >
          Мы верим, что хороший товар не должен пропадать, а покупатели достойны честных скидок.
        </Paragraph>

        <Paragraph
          fontSize="$4"
          textAlign="center"
          color="$green10"
          fontWeight="600"
          lineHeight="$5"
        >
          Наше приложение помогает продавцам быстро размещать товары, 
          а покупателям — удобно их находить и забирать.
        </Paragraph>
      </YStack>
    </YStack>
  )
}
