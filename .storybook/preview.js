//import "../assets/css/globals.css";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Brand", "Atoms", ["Intro", "*"], "Molecules", ["Intro", "*"], "Organisms", ["Intro", "*"], "Templates", ["Intro", "*"]],
    },
  },
};

// import { addParameters, addDecorator } from '@storybook/react';
// import { Parser } from 'html-to-react';
// //import './storybook.scss';

// const htmlToReactParser = new Parser();
// const renderFrameworkBaseStories = (storyFn, { args }) => {
//   const { render } = args || {};
//   switch (render) {
//     case 'react':
//       return storyFn();
//     default:
//       return htmlToReactParser.parse(storyFn());
//   }
// };

// addDecorator(renderFrameworkBaseStories);

// addParameters({
//   docs: {
//     prepareForInline: renderFrameworkBaseStories,
//     inlineStories: true,
//   },
// });
// export const parameters = {
//   a11y: {
//     element: '#root',
//     config: {},
//     options: {},
//     manual: true,
//   },
// };
