export const amenitiesPage = {
  name: "amenitiesPage",
  title: "Amenities Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string" },
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Amenity Name", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "icon", title: "Icon (emoji)", type: "string" },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    },
  ],
  preview: { select: { title: "heroTitle" } },
};
