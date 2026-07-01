import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SectionHeader from "@/components/ui/SectionHeader";

const meta: Meta<typeof SectionHeader> = {
  title: "UI/SectionHeader",
  component: SectionHeader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 700, padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Centered: Story = {
  args: {
    badge: "Accommodations",
    title: "Our Signature Rooms",
    subtitle:
      "Each room is thoughtfully designed to provide an unparalleled experience of comfort and elegance.",
    centered: true,
  },
};

export const LeftAligned: Story = {
  args: {
    badge: "Our Story",
    title: "A Legacy of Luxury",
    subtitle:
      "Nestled in the heart of elegance, Mirak Hotel offers a sanctuary for the discerning traveler.",
    centered: false,
  },
};

export const NoBadge: Story = {
  args: {
    title: "World-Class Amenities",
    subtitle: "Every detail thoughtfully curated for your complete indulgence.",
    centered: true,
  },
};
