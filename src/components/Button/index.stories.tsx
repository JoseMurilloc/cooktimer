import { ComponentStory, Meta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      Story()
    )
  ]
} as Meta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Save'
}

export const ButtonCancel = Template.bind({})
ButtonCancel.args = {
  children: 'Cancel',
  layout: 'outline'
}
