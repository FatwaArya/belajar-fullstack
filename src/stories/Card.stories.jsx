//create card stories using storybook

import React from "react";
import { Card } from "./Card";
import { deleteStudent } from "./../store/student";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Card {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  name: "John Doe",
  email: "john.doe@gmail.com",
  college: "University of California, Berkeley",
  major: "Computer Science",
  deleteAction: deleteStudent,
};
