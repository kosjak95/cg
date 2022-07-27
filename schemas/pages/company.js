const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "no", title: "Norwegian" },
  { id: "fr", title: "French" },
];

const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export const localeText = {
  title: "Localized text",
  name: "localeText",
  type: "object",
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? null : "translations",
  })),
};

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
      type: "localeText",
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
