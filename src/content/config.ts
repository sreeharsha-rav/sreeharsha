import { defineCollection, z } from "astro:content";
import { readFileSync } from "node:fs";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    externalUrl: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
    skills: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  loader: async () => {
    try {
      const fileContent = readFileSync("src/data/projects.json", "utf-8");
      const data = JSON.parse(fileContent);
      // Ensure data is array
      const projects = Array.isArray(data) ? data : (data.default || []);

      return projects.map((project: any) => ({
        ...project,
        // Create a slug from the title
        id: project.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      }));
    } catch (e) {
      console.error("Error loading projects:", e);
      return [];
    }
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, work, projects };
