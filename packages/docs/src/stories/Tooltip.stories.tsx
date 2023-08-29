import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TooltipDemo, TooltipProps } from '@vhalmeida-ui/react'

export default {
  title: 'Feedback/Tooltip',
  component: TooltipDemo,
  args: {
    children: <Text>Teste</Text>,
    message: 'Lorem ipsum',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => (
      <Box as={'label'} css={{ display: 'flex', flexDirection: 'column' }}>
        {Story()}
      </Box>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
