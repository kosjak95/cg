export const SiteConfig = {
  title: "Site configuration",
  name: "siteConfig",
  type: "document",
  //   __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  fieldsets: [
    {
      name: "login",
      title: "Login Page",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: "homePage",
      title: "Home Page",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      fieldset: "login",
      title: "Title",
      name: "loginPageTitle",
      type: "string",
    },
    {
      fieldset: "homePage",
      title: "Section1",
      name: "section1",
      type: "string",
    },
  ],
};
