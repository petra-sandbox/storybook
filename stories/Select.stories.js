//import React from 'react';

import { Select } from './Select';

export default {
   title: 'Atoms/Inputs/Select',
   argTypes: {
    label: { control: 'text' },
    //placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    // type: {
    //   control: { type: 'select' },
    //   options: ['text', 'email', 'number', 'date']
    // }
  },
};

// const Template = args => <Input {...args} />;

const Template = ({  ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return Select({ ...args });
};

export const Dropdown = Template.bind({});
Dropdown.args = {
   label: 'Select field',
   //placeholder: 'Placeholder text',
   disabled: 'false',
   //type: 'text'
 };
