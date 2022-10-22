import { Meta, Story } from "@storybook/react";
import { InfoCard, InfoCardProps } from "@/components/info-card/info-card";

const meta: Meta = {
  title: "Components/InfoCard",
  component: InfoCard
};

export default meta;

const Template: Story<InfoCardProps> = (props) => <InfoCard {...props} />;

export const Default = Template.bind({});

Default.args = {
  label: "Full Name",
  value: "John Doe"
};

