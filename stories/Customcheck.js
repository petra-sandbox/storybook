import React from 'react';

export const Tag = ({
    label,   
    disabled,
    checked
}) => {
    const customCheckbox = document.createElement('div');
    customCheckbox.classList.add('position-relative', 'd-inline-block', 'p-2', 'me-1', 'mb-2', 'px-2');
    
    const checkWrapper = document.createElement('div');
    checkWrapper.classList.add('d-flex', 'h-100');

    const customCheckInput = document.createElement('input');
    customCheckInput.setAttribute('type', 'checkbox');
    customCheckInput.classList.add('add-check', 'w-100', 'h-100', 'position-absolute');

    const customCheckLabel = document.createElement('label');
    customCheckLabel.classList.add('add-check-label', 'form-label', 'mb-0');
    customCheckLabel.innerText = label;

    checkWrapper.appendChild(customCheckInput);
    checkWrapper.appendChild(customCheckLabel);
    customCheckbox.appendChild(checkWrapper);
    
    if (disabled == true) {
    customCheckInput.setAttribute('disabled', disabled);
    }

    if(checked == true) {
        customCheckInput.checked = true;
    }

    return customCheckbox;
};