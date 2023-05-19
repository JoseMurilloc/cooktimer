import { ComponentStory, Meta } from '@storybook/react'

import { CardAddTimer } from '.'

export default {
  title: 'Components/CardTimer',
  component: CardAddTimer,
  decorators: [
    (Story) => (
      <section style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '$5',
        height: '100vh',
        backgroundColor: 'white',
        padding: 10
      }}>
        {Story()}
      </section>
    )
  ]
} as Meta<typeof CardAddTimer>

const Template: ComponentStory<typeof CardAddTimer> = (args) => (
  <CardAddTimer {...args} />
)

export const Default = Template.bind({})
Default.args = {}
