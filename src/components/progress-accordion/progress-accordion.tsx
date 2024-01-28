'use client'

import * as Primitves from '@radix-ui/react-accordion'
import * as React from 'react'

import { ProgressStatus } from '@/types'
import { clx } from '@/utils/clx'
import {
  CheckCircleSolid,
  CircleDottedLine,
  CircleHalfSolid,
  Plus,
} from '~/icons'

import { IconButton } from '../icon-button'

/**
 * This component is based on the [Radix UI Accordion](https://radix-ui.com/primitives/docs/components/accordion) primitves.
 */
const Root = (props: React.ComponentPropsWithoutRef<typeof Primitves.Root>) => {
  return <Primitves.Root {...props} />
}
Root.displayName = 'ProgressAccordion'

const Item = React.forwardRef<
  React.ElementRef<typeof Primitves.Item>,
  React.ComponentPropsWithoutRef<typeof Primitves.Item>
>(({ className, ...props }, ref) => {
  return (
    <Primitves.Item
      ref={ref}
      className={clx(
        'border-b border-ui-border-base last-of-type:border-b-0',
        className,
      )}
      {...props}
    />
  )
})
Item.displayName = 'ProgressAccordion.Item'

interface HeaderProps
  extends React.ComponentPropsWithoutRef<typeof Primitves.Header> {
  status?: ProgressStatus
}

interface StatusIndicatorProps extends React.ComponentPropsWithoutRef<'span'> {
  status: ProgressStatus
}

const ProgressIndicator = ({
  /**
   * The current status.
   */
  status,
  ...props
}: StatusIndicatorProps) => {
  const Icon = React.useMemo(() => {
    switch (status) {
      case 'not-started':
        return CircleDottedLine
      case 'in-progress':
        return CircleHalfSolid
      case 'completed':
        return CheckCircleSolid
      default:
        return CircleDottedLine
    }
  }, [status])

  return (
    <span
      className="flex h-12 w-12 items-center justify-center text-ui-fg-muted group-data-[state=open]:text-ui-fg-interactive"
      {...props}
    >
      <Icon className="h-5 w-5" />
    </span>
  )
}
ProgressIndicator.displayName = 'ProgressAccordion.ProgressIndicator'

const Header = React.forwardRef<
  React.ElementRef<typeof Primitves.Header>,
  HeaderProps
>(
  (
    {
      className,
      /**
       * The current status.
       */
      status = 'not-started',
      children,
      ...props
    }: HeaderProps,
    ref,
  ) => {
    return (
      <Primitves.Header
        ref={ref}
        className={clx(
          'group h3-core flex w-full flex-1 items-center gap-4 px-6 text-ui-fg-base',
          className,
        )}
        {...props}
      >
        <ProgressIndicator status={status} />
        {children}
        <Primitves.Trigger asChild className="ml-auto">
          <IconButton variant="transparent">
            <Plus className="h-5 w-5 transform transition-transform group-data-[state=open]:rotate-45" />
          </IconButton>
        </Primitves.Trigger>
      </Primitves.Header>
    )
  },
)
Header.displayName = 'ProgressAccordion.Header'

const Content = React.forwardRef<
  React.ElementRef<typeof Primitves.Content>,
  React.ComponentPropsWithoutRef<typeof Primitves.Content>
>(({ className, ...props }, ref) => {
  return (
    <Primitves.Content
      ref={ref}
      className={clx(
        'overflow-hidden',
        'pl-[88px] pr-6 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        className,
      )}
      {...props}
    />
  )
})
Content.displayName = 'ProgressAccordion.Content'

const ProgressAccordion = Object.assign(Root, {
  Item,
  Header,
  Content,
})

export { ProgressAccordion }
