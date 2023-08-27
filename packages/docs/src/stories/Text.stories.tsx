import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@vhalmeida-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur consequuntur eius facilis officia quaerat soluta. Aperiam blanditiis cupiditate eum, exercitationem laboriosam minima modi nam nostrum, recusandae reprehenderit similique velit.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
