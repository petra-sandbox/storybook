import React from 'react';

import { Tag } from './Customcheck';

export default {
   title: 'Atoms/Inputs/Custom checkbox',
   argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean'},
    checked: { control: 'boolean' }
  },
};

const Template = ({  ...args }) => {
  return Tag({ ...args });
};

export const Active = Template.bind({});
Active.args = {
   label: 'Custom checkbox',
   disabled: 'false',
   checked: 'false'
 };
