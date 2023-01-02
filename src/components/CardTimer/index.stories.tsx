import { ComponentStory, Meta } from '@storybook/react'
import { CardTimer } from '.'

export default {
  title: 'Components/CardTimer',
  component: CardTimer,
  decorators: [
    (Story) => (
      Story()
    ),
  ],
} as Meta<typeof CardTimer>

const Template: ComponentStory<typeof CardTimer> = (args) => (
  <CardTimer {...args} />
)

export const Default = Template.bind({})
Default.args = {}