//import React from 'react';

export const Input = ({
    label,
    placeholder,
    disabled,
    type,
    validation
}) => {
  const inputLabel = document.createElement('label');
  inputLabel.classList.add('form-label');
  inputLabel.innerText = label;

  const input = document.createElement('input');
  input.classList.add('form-control');
  input.setAttribute('type', type);
  input.setAttribute('placeholder', placeholder);

  if (disabled == true) {
    input.setAttribute('disabled', '');
  }

  const formGroup = document.createElement('div');
  //these .col classes take care of layout and responsivity, and work best in the .row Bootstrap class
  formGroup.classList.add('col-12', 'col-md-6', 'col-lg-4');
  formGroup.appendChild(inputLabel);
  formGroup.appendChild(input);

  function showFeedback(validation) {
    if (validation === 'not specified') {
      console.log('do nothing');
    } else {
      const validationResult = document.createElement('div');
      validationResult.classList.add(`${validation}-feedback`);
      validationResult.innerText = validation;
      validationResult.style.display = "block";
      input.classList.add('was-validated', `is-${validation}`);
      formGroup.appendChild(validationResult);
    }
  }

  showFeedback(validation);

  return formGroup;
}