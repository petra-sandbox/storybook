//import React from 'react';

export const Select = ({
    label,
    //placeholder,
    disabled,
    //type
}) => {
  const selectLabel = document.createElement('label');
  selectLabel.classList.add('form-label');
  selectLabel.innerText = label;

  const select = document.createElement('select');
  select.classList.add('form-select');

  if (disabled == true) {
    select.setAttribute('disabled', '');
  }

  const formGroup = document.createElement('div');
  //these .col classes take care of layout and responsivity, and work best in the .row Bootstrap class
  formGroup.classList.add('col-12', 'col-md-6', 'col-lg-4');
  formGroup.appendChild(selectLabel);
  formGroup.appendChild(select);

  return formGroup;
}