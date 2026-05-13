import type { MetadataRoute } from "next";

const BASE_URL = "https://tanhealthwellness.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/conditions", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/treatments", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/testimonials", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/patient-resources", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/book-appointment", priority: 1.0, changeFrequency: "weekly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
