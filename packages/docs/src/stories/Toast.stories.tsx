import type { Meta } from '@storybook/react'

import { Toast, ToastProps } from '@vhalmeida-ui/react'
import { Button } from '@vhalmeida-ui/react/src'
import { useState } from 'react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    title: 'Lorem Ipsum',
    description: 'Dolor sit amet',
    open: false,
    onOpenChange: (setTo: boolean) => setTo,
  },
  argTypes: {
    open: {
      description: 'It should be a boolean state',
      control: {
        type: null,
      },
    },
    onOpenChange: {
      description:
        'It should be a function that receives a boolean and sets the state to that value',
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary = ({ title, description }: ToastProps) => {
  const [open, setOpen] = useState(false)

  function toggleOpen(setTo: boolean) {
    setOpen(setTo)
  }

  return (
    <Toast
      title={title}
      description={description}
      open={open}
      onOpenChange={toggleOpen}
    >
      <Button
        onClick={() => {
          !open && toggleOpen(true)
        }}
      >
        Toggle toast
      </Button>
    </Toast>
  )
}
