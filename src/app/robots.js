export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://chronotap.co/sitemap.xml",
  };
}