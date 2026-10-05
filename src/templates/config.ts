export type Theme = "classic" | "minimal" | "heritage" | "dark";

export type TemplateInfo = {
  id: string;
  theme: Theme;
  name: string;
  tagline: string;
  description: string;
  swatches: string[];
};

export const templates: TemplateInfo[] = [
  {
    id: "1",
    theme: "classic",
    name: "Classic & Elegant",
    tagline: "Timeless fine jewelry",
    description:
      "Ivory, deep navy, and gold with refined serif type. A traditional, trustworthy fine-jewelry look.",
    swatches: ["#faf7f1", "#141c33", "#a8873f"],
  },
  {
    id: "2",
    theme: "minimal",
    name: "Modern Minimal",
    tagline: "Clean, quiet, photo-first",
    description:
      "Lots of white space, light sans-serif type, and big photography. Lets the rings speak for themselves.",
    swatches: ["#ffffff", "#f5f5f3", "#111111"],
  },
  {
    id: "3",
    theme: "heritage",
    name: "Warm Heritage",
    tagline: "Family-owned, hand-in-hand",
    description:
      "Cream, walnut, and copper with soft rounded shapes. Leans into the “& Son” family story and a welcoming local feel.",
    swatches: ["#fbf3e6", "#3a2a20", "#a2532a"],
  },
  {
    id: "4",
    theme: "dark",
    name: "Bold Dark",
    tagline: "Dramatic, high-end, high-contrast",
    description:
      "Near-black backgrounds, champagne gold, and large display type. Makes every stone glow.",
    swatches: ["#0b0b0d", "#151519", "#d9b668"],
  },
];

export const getTemplate = (id: string) => templates.find((t) => t.id === id);
export const templateBase = (id: string) => `/templates/${id}`;
