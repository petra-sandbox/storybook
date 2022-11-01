//import React from 'react';

export const Checks = ({
    label,
    //placeholder,
    disabled,
    type,
    icon
}) => {
  const checkboxLabel = document.createElement('label');
  checkboxLabel.classList.add('form-check-label');
  checkboxLabel.innerText = label;

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', type)
  checkbox.classList.add('form-check-input')

  if (disabled == true) {
    checkbox.setAttribute('disabled', '');
  }

  if (icon != 'none') {
    checkbox.classList.add(`${icon}-check`);
  }

  const formGroup = document.createElement('div');
  //these .col classes take care of layout and responsivity, and work best in the .row Bootstrap class
  formGroup.classList.add('form-check', 'col-12', 'col-md-6', 'col-lg-4');
  formGroup.appendChild(checkbox);
  formGroup.appendChild(checkboxLabel);

  return formGroup;
}