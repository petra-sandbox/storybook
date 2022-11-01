//import React from 'react';

import { Input } from './Input';

export default {
  //component: Input,
   title: 'Atoms/Inputs/Input',
   argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'number', 'data']
    },
    validation: { 
      control: { type: 'select' },
      options: [ 'not specified', 'valid', 'invalid' ]
     }
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
  return Input({ ...args });
};

export const Text = Template.bind({});
 Text.args = {
   label: 'Label',
   placeholder: 'Placeholder text',
   disabled: 'false',
   type: 'text'
 };

 export const Email = Template.bind({});
 Email.args = {
   label: 'Label',
   placeholder: 'Placeholder text',
   disabled: 'false',
   type: 'email'
 };

 export const Number = Template.bind({});
 Number.args = {
   label: 'Label',
   placeholder: 'Placeholder text',
   disabled: 'false',
   type: 'number'
 };

 export const Date = Template.bind({});
 Date.args = {
   label: 'Label',
   placeholder: 'Placeholder text',
   disabled: 'false',
   type: 'date'
 };

 export const File = Template.bind({});
 File.args = {
   label: 'Label',
   placeholder: 'Placeholder text',
   disabled: 'false',
   type: 'file'
 };