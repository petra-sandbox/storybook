import React from 'react';

import { Badge } from './Badge';

export default {
   title: 'Atoms/Badge',
   argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'danger']
    },
    opacity: {
      control: { type: 'select' },
      options: [ 25, 50, 75, 100 ]
    },
    rounded: { control: 'boolean'}
  },
};

// const Template = args => <Input {...args} />;

const Template = ({  ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return Badge({ ...args });
};

export const Success = Template.bind({});
Success.args = {
   label: 'Success',
   type: 'success',
   size: 'small',
   rounded: 'false',
   opacity: 100
 };

 export const Warning = Template.bind({});
 Warning.args = {
   label: 'Warning',
   type: 'warning',
   size: 'small',
   rounded: 'false',
   opacity: 100
 };

 export const Danger = Template.bind({});
 Danger.args = {
   label: 'Danger',
   type: 'danger',
   size: 'small',
   rounded: 'false',
   opacity: 100
 };
