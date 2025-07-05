import fs from "fs";
import path from "path";


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

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
        (route) =>
            `<url><loc>${route.url}</loc><lastmod>${route.lastModified.toISOString()}</lastmod></url>`
    )
    .join("\n")}
</urlset>`;

fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
console.log("sitemap.xml generated!");