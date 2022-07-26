import S from "@sanity/desk-tool/structure-builder";

// export default () =>
//   S.list()
//     .title("HireMe!")
//     .items([...S.documentTypeListItems()]);

export default () =>
  S.list()
    .title("HireMe!")
    .items([
      ...S.documentTypeListItems().filter((listItem) =>
        ["company"].includes(listItem.getId())
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) =>
        ["employee"].includes(listItem.getId())
      ),
      S.divider(),
      ...S.documentTypeListItems().filter((listItem) =>
        ["skill"].includes(listItem.getId())
      ),
    ]);

// export default () =>
//   S.list()
//     .title("HireMe!")
//     .items([
//       ...S.documentTypeListItems().filter((listItem) =>
//         ["company"].includes(listItem.getId())
//       ),
//       S.divider(),
//       ...S.documentTypeListItems().filter((listItem) =>
//         ["employee"].includes(listItem.getId())
//       ),
//       S.divider(),
//       ...S.documentTypeListItems().filter((listItem) =>
//         ["skill"].includes(listItem.getId())
//       ),
//       S.divider(),
//       ...S.documentTypeListItems().filter((listItem) =>
//         ["siteConfig"].includes(listItem.getId())
//       ),
//   S.listItem()
//     .title("Site configuration")
//     .child(
//       S.document()
//         .title("Config")
//         .schemaType("siteConfig")
//         .documentId("singleton-siteConfig")
//     ),
//]);
