//import './button.css';

export const createButton = ({
  //type,
  //primary = false,
  //size = 'medium',
  //backgroundColor,
  label,
  type,
  color,
  icon,

  //onClick,
}) => {
  const btn = document.createElement("button");
  btn.innerText = label;

  btn.className = ["btn", "p-2", "px-5", "rounded-lg"].join(" ");

  //cant use template literals eg..: 
  //btn.classList.add(`bg-${color}-500`, `hover:bg-${color}-400`, "text-white")
  //because tailwind doesnt build dynamically created classes
  //more on this: https://tailwindcss.com/docs/content-configuration#dynamic-class-names


  if ( color == "primary" ) {
    if ( type == "full" ) {
      btn.classList.add(`bg-primary-400`, `hover:bg-primary-500`, "text-white")
    } else if (type == "ghost") {
      btn.classList.add('bg-transparent', 'text-primary-400', 'border', 'border-primary-400', 'hover:bg-transparent', 'hover:border-primary-500', 'hover:text-primary-500')
    }
  }  

  if ( color == "red" ) {
    if ( type == "full" ) {
      btn.classList.add(`bg-red-500`, `hover:bg-red-600`, "text-white")
    } else if (type == "ghost") {
      btn.classList.add('bg-transparent', 'text-red-500', 'border', 'border-red-500', 'hover:bg-transparent', 'hover:border-red-600', 'hover:text-red-600')
    }
  }  

  if (icon != undefined && icon != "none") {
    btn.innerHTML = `<i class="fa-solid fa-${icon} mr-2"></i>${label}`;
  }

  if (type == "disabled") {
    btn.setAttribute("disabled", "");
  }

  return btn;
};
