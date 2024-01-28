'use client'

import {
  AriaTimeFieldProps,
  TimeValue,
  useDateSegment,
  useTimeField,
} from '@react-aria/datepicker'
import {
  type DateFieldState,
  type DateSegment,
  useTimeFieldState,
} from '@react-stately/datepicker'
import * as React from 'react'

import { inputBaseStyles } from '@/components/input'
import { clx } from '@/utils/clx'

type TimeSegmentProps = {
  segment: DateSegment
  state: DateFieldState
}

const TimeSegment = ({ segment, state }: TimeSegmentProps) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const { segmentProps } = useDateSegment(segment, state, ref)

  const isColon = segment.type === 'literal' && segment.text === ':'
  const isSpace = segment.type === 'literal' && segment.text === ' '

  const isDecorator = isColon || isSpace

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={clx(
        'txt-compact-small w-full rounded-md px-2 py-1 text-left uppercase tabular-nums',
        inputBaseStyles,
        'group-invalid/time-input:!shadow-borders-error group-aria-[invalid=true]/time-input:!shadow-borders-error',
        {
          '!w-fit border-none bg-transparent px-0 text-ui-fg-muted shadow-none':
            isDecorator,
          hidden: isSpace,
          'border-ui-border-base bg-ui-bg-disabled text-ui-fg-disabled shadow-none':
            state.isDisabled,
          '!bg-transparent !text-ui-fg-muted': !segment.isEditable,
        },
      )}
    >
      <span
        aria-hidden="true"
        className={clx(
          'txt-compact-small pointer-events-none block w-full text-left text-ui-fg-muted',
          {
            hidden: !segment.isPlaceholder,
            'h-0': !segment.isPlaceholder,
          },
        )}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </div>
  )
}

type TimeInputProps = Omit<
  AriaTimeFieldProps<TimeValue>,
  'label' | 'shouldForceLeadingZeros' | 'description' | 'errorMessage'
>

/**
 * This component is based on the `div` element and supports all of its props.
 */
const TimeInput = React.forwardRef<HTMLDivElement, TimeInputProps>(
  (
    {
      /**
       * The time's format. If no value is specified, the format is
       * set based on the user's locale.
       */
      hourCycle,
      ...props
    }: TimeInputProps,
    ref,
  ) => {
    const innerRef = React.useRef<HTMLDivElement>(null)

    React.useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
      ref,
      () => innerRef?.current,
    )

    const locale = window !== undefined ? window.navigator.language : 'en-US'

    const state = useTimeFieldState({
      hourCycle: hourCycle,
      locale: locale,
      shouldForceLeadingZeros: true,
      autoFocus: true,
      ...props,
    })

    const { fieldProps } = useTimeField(
      {
        ...props,
        hourCycle: hourCycle,
        shouldForceLeadingZeros: true,
      },
      state,
      innerRef,
    )

    return (
      <div
        {...fieldProps}
        ref={innerRef}
        className="group/time-input inline-flex w-full gap-x-2"
      >
        {state.segments.map((segment, i) => (
          <TimeSegment key={i} segment={segment} state={state} />
        ))}
      </div>
    )
  },
)
TimeInput.displayName = 'TimeInput'

export { TimeInput }
