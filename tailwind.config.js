module.exports = {
  content: ["./stories/**/*.{html,js}"],
  // ...
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "white": {
          DEFAULT: "#FFFFFF"
        },
        //it's called primary, because it it was called green, then 33% of the company would say that it's blue, and if it was called blue, then 33% of the company would say that it's green, and if it was called turquoise the rest would constantly misspell it in class names 
        "primary": {
          DEFAULT: "#34b4a1",
          50: "#f1fcf9",
          100: "#d0f7ee",
          200: "#a1eedd",
          300: "#69dfc9",
          400: "#34b4a1",
          500: "#21ab98",
          600: "#18897c",  
          700: "#176e65",
          800: "#175853",
          900: "#184945"
        },
        "darkgrey": {
          DEFAULT: "#333333",
          50: "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#818181",
          500: "#666666",
          600: "#515151",
          700: "#434343",
          800: "#383838",
          900: "#333333"
        },
        "darkblue": {
          DEFAULT: "#333333",
          50: "#f2f6fd",
          100: "#e4ecfa",
          200: "#c3d8f4",
          300: "#8eb7eb",
          400: "#5292de",
          500: "#2c75cb",
          600: "#1d5aac",
          700: "#18488c",
          800: "#183f74",
          900: "#173158"
        }
      }
    }
  }
};
