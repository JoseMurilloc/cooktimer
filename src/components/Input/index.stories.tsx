import React from 'react'

import { ComponentStory, Meta } from '@storybook/react'

import { Input } from '.'

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{
        width: '30%',
        height: 300,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
      }}>
        <div style={{
          backgroundColor: 'white',
          width: 250,
          borderRadius: 10
        }}>
          {Story()}
        </div>
      </div>
    )
  ]
} as Meta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Label'
}

export const Error = Template.bind({})
Error.args = {
  label: 'Label',
  hasError: true
}
