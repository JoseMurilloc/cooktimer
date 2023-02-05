import React from 'react'

import { ComponentStory, Meta } from '@storybook/react'

import { AddPlayerPopover } from '.'

export default {
  title: 'Components/AddPlayerPopover',
  component: AddPlayerPopover,
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: 'white',
        borderRadius: 10,
        height: 300,
        width: 250,
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {Story()}
      </div>
    )
  ]
} as Meta<typeof AddPlayerPopover>

const Template: ComponentStory<typeof AddPlayerPopover> = (args) => (
  <AddPlayerPopover {...args} />
)

export const Default = Template.bind({})
Default.args = {}
