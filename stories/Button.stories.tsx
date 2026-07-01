import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "@/components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: "Book Now", variant: "primary", size: "md" },
};

export const Outline: Story = {
  args: { children: "Explore Rooms", variant: "outline", size: "md" },
};

export const Ghost: Story = {
  args: { children: "Learn More", variant: "ghost", size: "md" },
};

export const Large: Story = {
  args: { children: "Reserve Your Suite", variant: "primary", size: "lg" },
};

export const Small: Story = {
  args: { children: "View Details", variant: "outline", size: "sm" },
};
