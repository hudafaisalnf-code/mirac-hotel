export const roomsPage = {
  name: "roomsPage",
  title: "Rooms Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string" },
    {
      name: "rooms",
      title: "Rooms",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Room Name", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "size", title: "Size (e.g. 45 m²)", type: "string" },
            { name: "capacity", title: "Max Guests", type: "number" },
            { name: "pricePerNight", title: "Price Per Night (USD)", type: "number" },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "image",
              title: "Room Image",
              type: "image",
              options: { hotspot: true },
            },
            { name: "featured", title: "Featured Room", type: "boolean" },
          ],
          preview: { select: { title: "name", subtitle: "size" } },
        },
      ],
    },
  ],
  preview: { select: { title: "heroTitle" } },
};
