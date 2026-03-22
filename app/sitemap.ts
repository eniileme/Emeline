import { MetadataRoute } from 'next';

const base = "https://emelineleguillou.com";

const paths = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/learning",
  "/now",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
