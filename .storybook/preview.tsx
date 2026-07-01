import type { Preview } from "@storybook/nextjs-vite";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "navy",
      values: [
        { name: "navy", value: "#0D2043" },
        { name: "light", value: "#f5f5f5" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    a11y: { test: "todo" },
  },
};

export default preview;
