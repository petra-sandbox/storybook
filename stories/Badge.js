//import React from 'react';

export const Badge = ({
    label,   
    type,
    opacity,
    rounded
}) => {
     const badge = document.createElement('span');
     badge.textContent = label;
     badge.classList.add('text-sm', `bg-${type}-${opacity}`)

     if (rounded == true) {
         badge.classList.add('rounded-pill');
     }
    
    return badge;
}