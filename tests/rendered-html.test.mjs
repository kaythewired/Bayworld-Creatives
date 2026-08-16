import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps production search metadata and structured data in the app shell", async () => {
  const [layout, homepage] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /metadataBase/);
  assert.match(layout, /Bayworld Creatives \| Crafting Dreams\. Amplifying Brands\./);
  assert.match(layout, /alternates:\s*\{\s*canonical:\s*"\/"/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /ProfessionalService/);
  assert.match(homepage, /Make your[\s\S]*next move[\s\S]*matter/i);
});

test("keeps crawl and share assets ready for search engines", async () => {
  const [robots, sitemap, manifest, layout] = await Promise.all([
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../public/site.webmanifest", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(robots, /Sitemap: https:\/\/www\.bayworldcreatives\.com\/sitemap\.xml/);
  assert.match(sitemap, /https:\/\/www\.bayworldcreatives\.com\/campaigns/);
  assert.match(manifest, /"name": "Bayworld Creatives"/);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /"max-image-preview": "large"/);
});
