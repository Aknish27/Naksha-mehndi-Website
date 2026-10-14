// Builds every logo-derived file from ONE source image: public/logo/nakshu-logo.jpg
//
//   node scripts/generate-brand.mjs        (or: npm run generate:brand)
//
// To change the logo later: replace public/logo/nakshu-logo.jpg (a square image on a
// plain, flat background works best), run the command above, restart `npm run dev`.
//
// Outputs
//   public/logo/logo-full.png      logo with the flat background removed (navbar)
//   public/logo/emblem.png         square crop of the illustration (testimonial avatar)
//   public/logo/profile-1024.png   square profile picture for Instagram / WhatsApp Business
//   src/app/icon.png               favicon
//   src/app/apple-icon.png         iOS home-screen icon
//   public/images/og-image.jpg     link preview (WhatsApp / Facebook / Google); uses hero.jpg
//
// EMBLEM_CROP below is tuned for the current logo (woman + flowers). If you swap the
// logo, adjust it (left, top, size in pixels of the source image).

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
function loadSharp() {
  for (const id of ["sharp", process.env.SHARP_PATH].filter(Boolean)) {
    try { return require(id); } catch { /* try next */ }
  }
  throw new Error("sharp not found. Run `npm install` first.");
}
const sharp = loadSharp();

const root = path.resolve(import.meta.dirname, "..");
const SRC = path.join(root, "public", "logo", "nakshu-logo.jpg");
if (!fs.existsSync(SRC)) throw new Error("Missing public/logo/nakshu-logo.jpg");

const EMBLEM_CROP = { left: 350, top: 40, size: 500 };
const BG_TOLERANCE = 18; // how close to the background colour a pixel must be to be removed

// ---------- 1. logo with transparent background ----------
const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H } = info;
const px = (x, y) => (y * W + x) * 4;

// background colour = average of the four corners
const corners = [px(2, 2), px(W - 3, 2), px(2, H - 3), px(W - 3, H - 3)];
const bg = [0, 1, 2].map((c) => Math.round(corners.reduce((s, i) => s + data[i + c], 0) / 4));
const near = (i) => Math.hypot(data[i] - bg[0], data[i + 1] - bg[1], data[i + 2] - bg[2]) < BG_TOLERANCE;

// flood fill inwards from the border so only background connected to the edge is removed
const seen = new Uint8Array(W * H);
const queue = new Int32Array(W * H);
let head = 0, tail = 0;
const push = (x, y) => {
  const k = y * W + x;
  if (!seen[k] && near(k * 4)) { seen[k] = 1; queue[tail++] = k; }
};
for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
while (head < tail) {
  const k = queue[head++];
  const x = k % W, y = (k / W) | 0;
  if (x > 0) push(x - 1, y);
  if (x < W - 1) push(x + 1, y);
  if (y > 0) push(x, y - 1);
  if (y < H - 1) push(x, y + 1);
}
for (let k = 0; k < W * H; k++) if (seen[k]) data[k * 4 + 3] = 0;

// soften the cut-out edge slightly so it doesn't look jagged
const alpha = await sharp(data, { raw: { width: W, height: H, channels: 4 } }).extractChannel(3).blur(0.8).raw().toBuffer();
for (let k = 0; k < W * H; k++) data[k * 4 + 3] = alpha[k];

fs.mkdirSync(path.join(root, "public", "logo"), { recursive: true });
await sharp(data, { raw: { width: W, height: H, channels: 4 } })
  .resize(900)
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, "public", "logo", "logo-full.png"));

// ---------- 2. emblem crop, favicon, app icon, profile picture ----------
const emblem = sharp(SRC).extract({ left: EMBLEM_CROP.left, top: EMBLEM_CROP.top, width: EMBLEM_CROP.size, height: EMBLEM_CROP.size });
await emblem.clone().resize(512).png({ compressionLevel: 9 }).toFile(path.join(root, "public", "logo", "emblem.png"));
fs.mkdirSync(path.join(root, "src", "app"), { recursive: true });
await emblem.clone().resize(256).png().toFile(path.join(root, "src", "app", "icon.png"));
await emblem.clone().resize(180).png().toFile(path.join(root, "src", "app", "apple-icon.png"));
await sharp(SRC).resize(1024).png({ compressionLevel: 9 }).toFile(path.join(root, "public", "logo", "profile-1024.png"));

// ---------- 3. link-preview image ----------
const heroPath = path.join(root, "public", "images", "hero.jpg");
const OW = 1200, OH = 630;
const layers = [{ input: await sharp(SRC).resize(600, 600).png().toBuffer(), left: 60, top: 15 }];
if (fs.existsSync(heroPath)) {
  const AW = 380, AH = 520, AX = 760, AY = 55;
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${AW}" height="${AH}"><path d="M0 ${AH}V${AW / 2}A${AW / 2} ${AW / 2} 0 0 1 ${AW} ${AW / 2}V${AH}Z" fill="#fff"/></svg>`);
  const arch = await sharp(heroPath).resize(AW, AH, { fit: "cover", position: "attention" }).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
  const ring = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${OW}" height="${OH}"><path d="M${AX - 12} ${AY + AH + 8}V${AY + AW / 2}A${AW / 2 + 12} ${AW / 2 + 12} 0 0 1 ${AX + AW + 12} ${AY + AW / 2}V${AY + AH + 8}" fill="none" stroke="#B8873A" stroke-width="2"/></svg>`);
  layers.push({ input: arch, left: AX, top: AY }, { input: ring, left: 0, top: 0 });
}
await sharp({ create: { width: OW, height: OH, channels: 3, background: { r: bg[0], g: bg[1], b: bg[2] } } })
  .composite(layers)
  .jpeg({ quality: 88 })
  .toFile(path.join(root, "public", "images", "og-image.jpg"));

console.log("Brand files written from public/logo/nakshu-logo.jpg");
