'use client'

import { toast } from 'sonner'

import { Button } from '@/components/button'

export function TabsDemo() {
  return (
    <Button
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
        })
      }
    >
      Show Toast
    </Button>
  )
}
