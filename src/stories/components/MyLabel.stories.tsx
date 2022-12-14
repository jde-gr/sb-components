import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select' },
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
); // component template

export const Basic = Template.bind({}); // use case basic
Basic.args = {
  size: 'normal',
  allCaps: false,
};

export const AllCaps = Template.bind({}); // use case: all caps
AllCaps.args = {
  size: 'normal',
  allCaps: true,
};

export const Secondary = Template.bind({}); // use case: secondary
Secondary.args = {
  size: 'normal',
  color: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac',
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: 'h1',
  fontColor: '#fff',
  backgroundColor: '#000',
};
