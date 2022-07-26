export const Employee = {
  name: "employee",
  type: "document",
  title: "Employee",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "address",
      type: "text",
      title: "Address",
    },
    {
      name: "skills",
      type: "array",
      title: "Skills",
      of: [
        {
          type: "reference",
          to: [{ type: "skill" }],
        },
      ],
    },
  ],
};
