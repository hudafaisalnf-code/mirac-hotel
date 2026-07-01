import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card from "@/components/ui/Card";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 360 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Deluxe Room",
    description:
      "A beautifully appointed room with panoramic city views and bespoke furnishings.",
    badge: "From $350",
  },
};

export const WithBadge: Story = {
  args: {
    title: "Junior Suite",
    description:
      "Spacious elegance with a separate living area and premium marble bathroom.",
    badge: "Most Popular",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Royal Suite",
    description:
      "The pinnacle of Mirak luxury with private terrace and butler service.",
    badge: "From $1,200",
    footer: (
      <span className="text-gold text-xs uppercase tracking-widest font-sans">
        View Details →
      </span>
    ),
  },
};
