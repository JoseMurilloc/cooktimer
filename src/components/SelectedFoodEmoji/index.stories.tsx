import React from 'react'
import { ComponentStory, Meta } from '@storybook/react'
import { SelectedFoodEmoji } from '.'

export default {
  title: 'Components/SelectedFoodEmoji',
  component: SelectedFoodEmoji,
  decorators: [
    (Story) => (
      <div style={{
        backgroundColor: 'white',
        borderRadius: 10,
        height: 300,
        width: 250,
        padding: 20,
      }}>
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof SelectedFoodEmoji>

const Template: ComponentStory<typeof SelectedFoodEmoji> = (args) => (
  <SelectedFoodEmoji  />
)

export const Default = Template.bind({})
Default.args = {}
