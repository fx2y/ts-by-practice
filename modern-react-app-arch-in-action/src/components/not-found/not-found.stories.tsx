import { Meta, Story } from "@storybook/react";
import { NotFound } from "@/components/not-found/not-found";

const meta: Meta = {
  title: "Components/NotFound",
  component: NotFound
};

export default meta;

const Template: Story = (props) => <NotFound {...props} />;

export const Default = Template.bind({});