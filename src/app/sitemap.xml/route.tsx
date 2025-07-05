export const dynamic = 'force-static';

import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const APP_DIR = path.join(process.cwd(), 'src/app');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const SITE_URL = 'https://meminit.github.io'; 

function getAppRoutes(dir: string, baseUrl = ''): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let routes: string[] = [];
    for (const entry of entries) {
        if (entry.isDirectory()) {
            if (!entry.name.startsWith('_') && !entry.name.startsWith('.')) {
                const route = `${baseUrl}/${entry.name}`;
                routes.push(route);
                routes = routes.concat(getAppRoutes(path.join(dir, entry.name), route));
            }
        }
    }
    return routes;
}

function getPublicImages(dir: string, baseUrl = ''): string[] {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let images: string[] = [];
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            images = images.concat(getPublicImages(fullPath, `${baseUrl}/${entry.name}`));
        } else if (imageExtensions.includes(path.extname(entry.name).toLowerCase())) {
            images.push(`${baseUrl}/${entry.name}`);
        }
    }
    return images;
}

export async function GET() {
    const appRoutes = getAppRoutes(APP_DIR).map(route => `${SITE_URL}${route}`);
    const publicImages = getPublicImages(PUBLIC_DIR).map(img => `${SITE_URL}${img}`);

    const urls = [...appRoutes, ...publicImages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        url => `<url><loc>${url.replace(/\/+/g, '/').replace(':/', '://')}</loc></url>`
    )
    .join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}