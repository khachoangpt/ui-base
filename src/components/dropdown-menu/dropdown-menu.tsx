'use client'

import * as Primitives from '@radix-ui/react-dropdown-menu'
import * as React from 'react'

import { clx } from '@/utils/clx'
import { CheckMini, ChevronRightMini, EllipseMiniSolid } from '~/icons'

/**
 * This component is based on the [Radix UI Dropdown Menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu) primitive.
 */
const Root = Primitives.Root
Root.displayName = 'DropdownMenu'

/**
 * This component is based on the [Radix UI Dropdown Menu Trigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#trigger) primitive.
 */
const Trigger = Primitives.Trigger
Trigger.displayName = 'DropdownMenu.Trigger'

/**
 * This component is based on the [Radix UI Dropdown Menu Group](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#group) primitive.
 */
const Group = Primitives.Group
Group.displayName = 'DropdownMenu.Group'

/**
 * This component is based on the [Radix UI Dropdown Menu Sub](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#sub) primitive.
 */
const SubMenu = Primitives.Sub
SubMenu.displayName = 'DropdownMenu.SubMenu'

/**
 * This component is based on the [Radix UI Dropdown Menu RadioGroup](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radiogroup) primitive.
 */
const RadioGroup = Primitives.RadioGroup
RadioGroup.displayName = 'DropdownMenu.RadioGroup'

/**
 * This component is based on the [Radix UI Dropdown Menu SubTrigger](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subtrigger) primitive.
 */
const SubMenuTrigger = React.forwardRef<
  React.ElementRef<typeof Primitives.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof Primitives.SubTrigger>
>(({ className, children, ...props }, ref) => (
  <Primitives.SubTrigger
    ref={ref}
    className={clx(
      'txt-compact-small flex cursor-default select-none items-center rounded-sm px-2 py-1.5 outline-none focus-visible:bg-ui-bg-base-pressed data-[state=open]:bg-ui-bg-base-pressed',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRightMini className="ml-auto h-5 w-5" />
  </Primitives.SubTrigger>
))
SubMenuTrigger.displayName = 'DropdownMenu.SubMenuTrigger'

/**
 * This component is based on the [Radix UI Dropdown Menu SubContent](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#subcontent) primitive.
 */
const SubMenuContent = React.forwardRef<
  React.ElementRef<typeof Primitives.SubContent>,
  React.ComponentPropsWithoutRef<typeof Primitives.SubContent>
>(({ className, collisionPadding = 8, ...props }, ref) => (
  <Primitives.Portal>
    <Primitives.SubContent
      ref={ref}
      collisionPadding={collisionPadding}
      className={clx(
        'max-h-[var(--radix-popper-available-height)] min-w-[8rem] overflow-hidden rounded-lg bg-ui-bg-base p-1 text-ui-fg-base shadow-elevation-flyout',
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </Primitives.Portal>
))
SubMenuContent.displayName = 'DropdownMenu.SubMenuContent'

/**
 * This component is based on the [Radix UI Dropdown Menu Content](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#content) primitive.
 */
const Content = React.forwardRef<
  React.ElementRef<typeof Primitives.Content>,
  React.ComponentPropsWithoutRef<typeof Primitives.Content>
>(
  (
    {
      className,
      sideOffset = 8,
      collisionPadding = 8,
      align = 'center',
      ...props
    },
    ref,
  ) => (
    <Primitives.Portal>
      <Primitives.Content
        ref={ref}
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
        className={clx(
          'max-h-[var(--radix-popper-available-height)] min-w-[220px] overflow-hidden rounded-lg bg-ui-bg-base p-1 text-ui-fg-base shadow-elevation-flyout',
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className,
        )}
        {...props}
      />
    </Primitives.Portal>
  ),
)
Content.displayName = 'DropdownMenu.Content'

/**
 * This component is based on the [Radix UI Dropdown Menu Item](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#item) primitive.
 */
const Item = React.forwardRef<
  React.ElementRef<typeof Primitives.Item>,
  React.ComponentPropsWithoutRef<typeof Primitives.Item>
>(({ className, ...props }, ref) => (
  <Primitives.Item
    ref={ref}
    className={clx(
      'txt-compact-small relative flex cursor-pointer select-none items-center rounded-md bg-ui-bg-base px-2 py-1.5 text-ui-fg-base outline-none transition-colors hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed data-[disabled]:pointer-events-none data-[disabled]:text-ui-fg-disabled',
      className,
    )}
    {...props}
  />
))
Item.displayName = 'DropdownMenu.Item'

/**
 * This component is based on the [Radix UI Dropdown Menu CheckboxItem](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#checkboxitem) primitive.
 */
const CheckboxItem = React.forwardRef<
  React.ElementRef<typeof Primitives.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof Primitives.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <Primitives.CheckboxItem
    ref={ref}
    className={clx(
      'relative flex cursor-pointer select-none items-center rounded-md py-1.5 pl-9 pr-2 text-sm text-ui-fg-base outline-none transition-colors hover:bg-ui-bg-base-hover focus-visible:bg-ui-bg-base-pressed data-[disabled]:pointer-events-none data-[disabled]:text-ui-fg-disabled',
      className,
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-3 flex h-5 w-5 items-center justify-center">
      <Primitives.ItemIndicator>
        <CheckMini className="h-5 w-5" />
      </Primitives.ItemIndicator>
    </span>
    {children}
  </Primitives.CheckboxItem>
))
CheckboxItem.displayName = 'DropdownMenu.CheckboxItem'

/**
 * This component is based on the [Radix UI Dropdown Menu RadioItem](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#radioitem) primitive.
 */
const RadioItem = React.forwardRef<
  React.ElementRef<typeof Primitives.RadioItem>,
  React.ComponentPropsWithoutRef<typeof Primitives.RadioItem>
>(({ className, children, ...props }, ref) => (
  <Primitives.RadioItem
    ref={ref}
    className={clx(
      'hover:bg-ui-base-hover txt-compact-small relative flex cursor-pointer select-none items-center rounded-md bg-ui-bg-base py-1.5 pl-9 pr-2 text-sm outline-none transition-colors focus-visible:bg-ui-bg-base-pressed data-[disabled]:pointer-events-none data-[state=checked]:font-medium data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute left-3 flex h-5 w-5 items-center justify-center">
      <Primitives.ItemIndicator>
        <EllipseMiniSolid className="h-5 w-5 text-ui-fg-base" />
      </Primitives.ItemIndicator>
    </span>
    {children}
  </Primitives.RadioItem>
))
RadioItem.displayName = 'DropdownMenu.RadioItem'

/**
 * This component is based on the [Radix UI Dropdown Menu Label](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#label) primitive.
 */
const Label = React.forwardRef<
  React.ElementRef<typeof Primitives.Label>,
  React.ComponentPropsWithoutRef<typeof Primitives.Label>
>(({ className, ...props }, ref) => (
  <Primitives.Label
    ref={ref}
    className={clx('txt-compact-xsmall-plus text-ui-fg-subtle', className)}
    {...props}
  />
))
Label.displayName = 'DropdownMenu.Label'

/**
 * This component is based on the [Radix UI Dropdown Menu Separator](https://www.radix-ui.com/primitives/docs/components/dropdown-menu#separator) primitive.
 */
const Separator = React.forwardRef<
  React.ElementRef<typeof Primitives.Separator>,
  React.ComponentPropsWithoutRef<typeof Primitives.Separator>
>(({ className, ...props }, ref) => (
  <Primitives.Separator
    ref={ref}
    className={clx('-mx-1 my-1 h-px bg-ui-border-base', className)}
    {...props}
  />
))
Separator.displayName = 'DropdownMenu.Separator'

/**
 * This component is based on the `span` element and supports all of its props
 */
const Shortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={clx(
        'txt-compact-small ml-auto tracking-widest text-ui-fg-subtle',
        className,
      )}
      {...props}
    />
  )
}
Shortcut.displayName = 'DropdownMenu.Shortcut'

/**
 * This component is based on the `span` element and supports all of its props
 */
const Hint = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={clx(
        'txt-compact-small ml-auto tracking-widest text-ui-fg-subtle',
        className,
      )}
      {...props}
    />
  )
}
Hint.displayName = 'DropdownMenu.Hint'

const DropdownMenu = Object.assign(Root, {
  Trigger,
  Group,
  SubMenu,
  SubMenuContent,
  SubMenuTrigger,
  Content,
  Item,
  CheckboxItem,
  RadioGroup,
  RadioItem,
  Label,
  Separator,
  Shortcut,
  Hint,
})

export { DropdownMenu }
