import React from 'react'

import { ComponentStory, Meta } from '@storybook/react'

import { InputTimer } from '.'

export default {
  title: 'Components/InputTimer',
  component: InputTimer,
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: 'white',
        borderRadius: 10,
        height: 300,
        width: 250,
        padding: 20
      }}>
        {Story()}
      </div>
    )
  ]
} as Meta<typeof InputTimer>

const Template: ComponentStory<typeof InputTimer> = (args) => (
  <InputTimer {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Label'
}
