import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
    const pagesDir = path.join(process.cwd(), "src", "app");

    function findPages(dir: string, baseUrl: string = ""): { url: string; lastModified: Date }[] {
        let results: { url: string; lastModified: Date }[] = [];
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                results = results.concat(findPages(fullPath, path.join(baseUrl, entry.name)));
            } else if (entry.isFile() && entry.name === "page.tsx") {
                const stats = fs.statSync(fullPath);
                const urlPath = baseUrl.replace(/\\/g, "/");
                results.push({
                    url: `https://localhost:3000${urlPath ? "/" + urlPath : ""}`,
                    lastModified: stats.mtime
                });
            }
        }
        return results;
    }

    const routes = findPages(pagesDir);
    return routes
}