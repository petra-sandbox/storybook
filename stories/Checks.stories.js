//import React from 'react';

import { Checks } from './Checks';

export default {
   title: 'Atoms/Inputs/Checks',
   argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['checkbox', 'radio']
    },
    disabled: { control: 'boolean' },
    icon: {
      control: { type: 'select' },
      options: [ 'none', 'plus']
    }
  },
};

// const Template = args => <Input {...args} />;

const Template = ({  ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return Checks({ ...args });
};

export const Checkbox = Template.bind({});
Checkbox.args = {
   label: 'Checkbox',
   //placeholder: 'Placeholder text',
   disabled: 'false',
   type: 'checkbox',
   icon: 'none'
 };

 export const Radio = Template.bind({});
 Radio.args = {
   label: 'Radio',
   //placeholder: 'Placeholder text',
   disabled: 'false',
   type: 'radio'
 };
