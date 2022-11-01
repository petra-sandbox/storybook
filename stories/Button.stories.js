import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  // More on argTypes: https://sto rybook.js.org/docs/html/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
    label: { control: 'text' },
    //onClick: { action: 'onClick' },
    //primary: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['full', 'ghost']
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'red']
    },
    icon: {
      control: {type: 'select'},
      options: ['none', 'arrow-up-right-from-square','calendar', 'calendar-days', 'circle-check', 'circle-exclamation', 'circle-info', 'circle-xmark', 'copy', 'download', 'lock', 'magnifying-glass', 'pen', 'pen-to-square', 'plus', 'toggle-on', 'toggle-off', 'trash-can', 'triangle-exclamation','upload' ]
    }
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  // primary: true,
  label: 'Button',
  type: 'full',
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'ghost',
  color: 'primary'
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  type: 'full',
  color: 'red'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  type: 'disabled',
  disabledAttr: 'disabled',
};
