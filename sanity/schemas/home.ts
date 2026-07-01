export const homePage = {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    { name: "heroTitle", title: "Hero Title", type: "string" },
    { name: "heroSubtitle", title: "Hero Subtitle", type: "string" },
    {
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "welcomeTitle", title: "Welcome Section Title", type: "string" },
    { name: "welcomeText", title: "Welcome Section Text", type: "text" },
    { name: "ctaTitle", title: "CTA Title", type: "string" },
    { name: "ctaSubtitle", title: "CTA Subtitle", type: "string" },
    { name: "ctaButton", title: "CTA Button Label", type: "string" },
  ],
  preview: { select: { title: "heroTitle" } },
};
