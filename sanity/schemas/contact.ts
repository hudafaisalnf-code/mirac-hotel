export const contactPage = {
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string" },
    { name: "address", title: "Address", type: "text" },
    { name: "phone", title: "Phone Number", type: "string" },
    { name: "email", title: "Email Address", type: "string" },
    { name: "hours", title: "Business Hours", type: "string" },
  ],
  preview: { select: { title: "heroTitle" } },
};
