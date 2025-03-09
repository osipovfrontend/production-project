import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description text',
};

export const Error = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description text',
    theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description text',
};

export const PrimaryDark = Template.bind({});
Primary.args = {
    title: 'Title lorem ipsum',
    text: 'Description text',
};

export const onlyTitleDark = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem ipsum',
};

export const onlyTextDark = Template.bind({});
onlyText.args = {
    text: 'Description text',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
