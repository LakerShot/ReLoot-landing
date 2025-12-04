import { Anchor, Button, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'

export function UserDetailScreen({ id }: { id: string }) {
  if (!id) {
    return null
  }
  return (
    <YStack flex={1} justify="center" items="center" gap="$4" bg="$background">
      <Paragraph text="center" fontWeight="700" color="$blue10">{`User ID: ${id}`}</Paragraph>
      <Anchor href="/" target="_self">
        <Button icon={ChevronLeft}>
          Go Home
        </Button>
      </Anchor>
    </YStack>
  )
}
