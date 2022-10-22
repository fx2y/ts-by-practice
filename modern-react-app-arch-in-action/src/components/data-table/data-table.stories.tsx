import { DataTable, DataTableProps } from "@/components/data-table/data-table";
import { testData } from "@/testing/test-data";
import { Meta, Story } from "@storybook/react";

const meta: Meta = {
  title: "Components/DataTable",
  component: DataTable
};

export default meta;

const data = testData.jobs.slice(0, 6);

const columns: DataTableProps<typeof data[0]>["columns"] = [
  {
    title: "Position",
    field: "position"
  },
  {
    title: "Department",
    field: "department"
  },
  {
    title: "Location",
    field: "location"
  }
];

const Template: Story<DataTableProps<typeof data[0]>> = (props) => <DataTable {...props} />;

export const Default = Template.bind({});
Default.args = {
  columns,
  data
};

export const Empty = Template.bind({});
Empty.args = {
  columns,
  data: []
};

export const Loading = Template.bind({});
Loading.args = {
  columns,
  data: [],
  isLoading: true
};
