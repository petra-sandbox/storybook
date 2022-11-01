## Working on the project

### After pulling or cloning

npm install
npm run build:tailwind
npm run storybook

### If you make changes to main.js, preview.js

Restart the project with:
npm run storybook

## Sharing the project

### Create a build with Chromatic

WIP

## FAQ

### Dynamic class names

Tailwind will not generate classes when built if the class strings are dynamically generated. More: https://tailwindcss.com/docs/content-configuration#dynamic-class-names