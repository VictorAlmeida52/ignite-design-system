import {themes} from "@storybook/theming";

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            theme: themes.dark
        },
        backgrounds: {
            default: 'dark'
        },
        layout: 'centered',
    },
};

export default preview;