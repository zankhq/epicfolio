import { z, defineCollection } from "astro:content";

const portfolioCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		snippet: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		publishDate: z.string().transform((str) => new Date(str)),
		category: z.string(),
	}),
});

export const collections = {
	portfolio: portfolioCollection,
};
