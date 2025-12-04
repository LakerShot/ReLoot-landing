'use client'

import { useState } from 'react'
import { YStack, XStack, H2, Paragraph, Text, Button, Input } from '@my/ui'
import { Mail, Smartphone, Bell } from '@tamagui/lucide-icons'

export function Download() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (email && email.includes('@')) {
      setSubmitted(true)
      // TODO: Отправить email на бэкенд
      console.log('Email submitted:', email)
    }
  }

  return (
    <YStack
      tag="section"
      paddingVertical="$8"
      paddingHorizontal="$4"
      alignItems="center"
      backgroundColor="$green9"
    >
      <YStack maxWidth={600} gap="$6" alignItems="center">
        <H2
          fontSize="$8"
          fontWeight="700"
          textAlign="center"
          color="white"
        >
          Скоро в вашем смартфоне
        </H2>

        <Paragraph
          fontSize="$4"
          textAlign="center"
          color="$green3"
          lineHeight="$5"
        >
          Мы завершаем разработку и скоро откроем доступ к скачиванию приложения.
        </Paragraph>

        {!submitted ? (
          <YStack gap="$4" width="100%" alignItems="center">
            <Text fontSize="$4" color="white" textAlign="center">
              Оставьте e-mail, и мы уведомим вас первыми.
            </Text>

            <XStack
              gap="$2"
              width="100%"
              maxWidth={400}
              $sm={{ flexDirection: 'column' }}
            >
              <Input
                flex={1}
                size="$4"
                placeholder="Ваш e-mail"
                backgroundColor="white"
                borderRadius="$3"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <Button
                size="$4"
                backgroundColor="$green11"
                color="white"
                borderRadius="$3"
                hoverStyle={{ backgroundColor: '$green12' }}
                onPress={handleSubmit}
                icon={<Bell size={18} />}
              >
                Получить уведомление
              </Button>
            </XStack>
          </YStack>
        ) : (
          <YStack
            padding="$4"
            backgroundColor="$green10"
            borderRadius="$4"
            alignItems="center"
            gap="$2"
          >
            <Text fontSize="$5" color="white" fontWeight="600">
              ✅ Спасибо!
            </Text>
            <Text fontSize="$4" color="$green3">
              Мы уведомим вас о запуске на {email}
            </Text>
          </YStack>
        )}

        <XStack gap="$3" marginTop="$4" flexWrap="wrap" justifyContent="center">
          <Button
            size="$4"
            backgroundColor="$gray6"
            color="$gray11"
            borderRadius="$4"
            disabled
            opacity={0.7}
            icon={<Smartphone size={18} />}
          >
            App Store (скоро)
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
            Google Play (скоро)
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
}
