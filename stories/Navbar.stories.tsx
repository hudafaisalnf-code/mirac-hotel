import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Navbar from "@/components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Layout/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    nextjs: { navigation: { pathname: "/" } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};

export const OnRoomsPage: Story = {
  parameters: { nextjs: { navigation: { pathname: "/rooms" } } },
};

export const OnContactPage: Story = {
  parameters: { nextjs: { navigation: { pathname: "/contact" } } },
};
