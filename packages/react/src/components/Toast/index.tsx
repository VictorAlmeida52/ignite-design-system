import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { ComponentProps, ReactElement } from 'react'

import * as RawToast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
  open: boolean
  onOpenChange: (isOpen: boolean) => void
  children?: ReactElement
}

export function Toast({
  children,
  title,
  description,
  open,
  onOpenChange,
}: ToastProps) {
  return (
    <RawToast.Provider swipeDirection="right">
      {children}
      <ToastRoot open={open} onOpenChange={onOpenChange}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose asChild>
          <X size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </RawToast.Provider>
  )
}

Toast.displayName = 'Toast'
