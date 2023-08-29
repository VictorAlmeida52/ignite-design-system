import React, { ComponentProps, ReactElement } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps extends ComponentProps<typeof Tooltip.Content> {
  message: string
  children: ReactElement
}

export function TooltipDemo({ message, children }: TooltipProps) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger style={{ color: '#ccc' }} asChild>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <TooltipContent sideOffset={5}>
            {message}
            <TooltipArrow />
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

TooltipDemo.displayName = 'TooltipDemo'
