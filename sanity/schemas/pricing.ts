export const pricingPage = {
  name: "pricingPage",
  title: "Pricing Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string" },
    {
      name: "currency",
      title: "Currency Symbol",
      type: "string",
      initialValue: "$",
    },
    {
      name: "plans",
      title: "Rate Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Plan Name", type: "string" },
            { name: "description", title: "Description", type: "text" },
            { name: "pricePerNight", title: "Price Per Night", type: "number" },
            {
              name: "features",
              title: "Inclusions",
              type: "array",
              of: [{ type: "string" }],
            },
            { name: "highlighted", title: "Highlight This Plan", type: "boolean" },
            { name: "badge", title: "Badge Label", type: "string" },
          ],
          preview: { select: { title: "name", subtitle: "pricePerNight" } },
        },
      ],
    },
    { name: "note", title: "Pricing Note", type: "string" },
  ],
  preview: { select: { title: "heroTitle" } },
};
