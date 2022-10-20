import {Meta, Story} from "@storybook/react";
import {Button, ButtonProps} from "@/components/button/button";
import {PlusSquareIcon} from "@chakra-ui/icons";

const meta: Meta = {
    title: 'Components/Button',
    component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (props) => <Button {...props} />;

export const Default = Template.bind({});

Default.args = {
    children: 'Click Me',
};

export const WithIcon = Template.bind({});

WithIcon.args = {
    children: 'Click Me',
    icon: <PlusSquareIcon/>,
};