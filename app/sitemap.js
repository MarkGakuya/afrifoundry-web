const BASE_URL = "https://afrifoundry.com";

const routes = [
  "",
  "/about",
  "/product",
  "/team",
  "/partners",
  "/investors",
  "/developers",
  "/users",
  "/contribute",
  "/community",
  "/privacy",
  "/terms",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
