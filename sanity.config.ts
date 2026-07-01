import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "@/sanity/schema";

export default defineConfig({
  name: "mirac-studio",
  title: "Mirak Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "dkp9nx8s",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [structureTool(), visionTool()],
  schema,
});
