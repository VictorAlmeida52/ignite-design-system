import type { StoryObj, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@vhalmeida-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/victoralmeida52.png',
    alt: 'Victor Almeida',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
