import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

Primary.decorators = [
    ThemeDecorator(Theme.LIGHT),
];

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

Clear.decorators = [
    ThemeDecorator(Theme.LIGHT),
];

export const ClearInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

ClearInverted.decorators = [
    ThemeDecorator(Theme.LIGHT),
];

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

Outline.decorators = [
    ThemeDecorator(Theme.LIGHT),
];

export const OutlineSizeL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};

OutlineSizeL.decorators = [
    // ThemeDecorator(Theme.LIGHT),
];

export const OutlineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};

OutlineSizeXL.decorators = [
    // ThemeDecorator(Theme.LIGHT),
];

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

OutlineDark.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

BackgroundTheme.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const BackgroundThemeInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

BackgroundThemeInverted.decorators = [
    ThemeDecorator(Theme.DARK),
];

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

// Square.decorators = [
//     ThemeDecorator(Theme.DARK),
// ];

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

// SquareSizeL.decorators = [
//     ThemeDecorator(Theme.DARK),
// ];

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

// SquareSizeXL.decorators = [
//     ThemeDecorator(Theme.DARK),
// ];
