import { cva, VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { ExclamationCircleSolid } from '~/icons'

import { clx } from '../../utils/clx'

const hintVariants = cva('txt-small inline-flex items-center gap-x-2', {
  variants: {
    variant: {
      info: 'text-ui-fg-subtle',
      error: 'text-ui-fg-error',
    },
  },
  defaultVariants: {
    variant: 'info',
  },
})

interface HintProps
  extends VariantProps<typeof hintVariants>,
    React.ComponentPropsWithoutRef<'span'> {}

const Hint = React.forwardRef<HTMLSpanElement, HintProps>(
  (
    {
      className,
      /**
       * The hint's style.
       */
      variant = 'info',
      children,
      ...props
    }: HintProps,
    ref,
  ) => {
    return (
      <span
        ref={ref}
        className={clx(hintVariants({ variant }), className)}
        {...props}
      >
        {variant === 'error' && <ExclamationCircleSolid className="h-5 w-5" />}
        {children}
      </span>
    )
  },
)
Hint.displayName = 'Hint'

export { Hint }
