export const Company = {
  name: "company",
  type: "document",
  title: "Company",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Company Name",
    },
    {
      name: "description",
      type: "text",
      title: "Company Description",
    },
    {
      name: "employees",
      type: "array",
      title: "Employees",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "employees2",
      type: "array",
      title: "Employees",
      of: [
        {
          name: "emp",
          type: "object",
          title: "Employee",
          fields: [
            {
              name: "firstName",
              type: "string",
            },
            {
              name: "lastName",
              type: "string",
            },
            {
              name: "address",
              type: "text",
            },
            {
              name: "salary",
              type: "number",
            },
          ],
        },
      ],
    },
    // {
    //   name: "employees3",
    //   type: "array",
    //   title: "Employees",
    //   of: [
    //     {
    //       type: "reference",
    //       to: [{ type: "employee" }],
    //     },
    //   ],
    //   options: {
    //     layout: "tags",
    //   },
    // },
  ],
};
