import { MetadataRoute } from "next";

// Robots.txt — tells search engines what to crawl.
// Deployed at: https://swaqar.com/robots.txt
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://swaqar.com/sitemap.xml",
    };
}