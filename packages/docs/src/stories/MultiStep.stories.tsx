import type { StoryObj, Meta } from '@storybook/react'

import { Box, MultiStep, MultiStepProps } from '@vhalmeida-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    steps: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
      <Box
        as={'label'}
        css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
      >
        {Story()}
      </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const LastStep: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
