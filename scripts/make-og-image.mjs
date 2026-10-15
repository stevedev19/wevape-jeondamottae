// Builds og-image.jpg (1200x630), the link-preview image used by the
// og:image / twitter:image tags in index.html.
//
//   npm run og-image        (needs Node 20.9+ for sharp)
//
// Photo: IMG2597.jpg, scaled to cover the canvas and cropped near the top so
// the WEVAPE sign stays in frame. A dark gradient over the lower part keeps
// the text readable. Korean text uses the system's Korean font (Apple SD
// Gothic Neo on macOS; Noto Sans CJK KR / Malgun Gothic elsewhere).

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "IMG2597.jpg");
const OUT = path.join(root, "og-image.jpg");

const W = 1200;
const H = 630;
const CROP_TOP = 0.04;          // where the crop starts, as a share of the scaled photo's height
const GREEN = "#97C459";        // --accent in style.css

const TITLE = "WeVape x Jeondam-ottae";
const SUBTITLE = "영등포전자담배 · 전국 무료배송";
const FONT = "'Apple SD Gothic Neo', 'Noto Sans CJK KR', 'Malgun Gothic', sans-serif";

// 1. Photo: scale to the canvas width, then cut a W x H band near the top.
const meta = await sharp(SRC).metadata();
const scaledH = Math.round(meta.height * (W / meta.width));
const top = Math.min(Math.round(scaledH * CROP_TOP), scaledH - H);
const photo = await sharp(SRC)
  .resize({ width: W, kernel: "lanczos3" })
  .extract({ left: 0, top, width: W, height: H })
  .sharpen({ sigma: 0.8 })     // the source is small, so it's upscaled ~3x
  .toBuffer();

// 2. Overlay: bottom gradient, title, green accent bar, subtitle.
const X = 64;
const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0"    stop-color="#000" stop-opacity="0"/>
      <stop offset="0.45" stop-color="#000" stop-opacity="0.55"/>
      <stop offset="1"    stop-color="#000" stop-opacity="0.88"/>
    </linearGradient>
  </defs>
  <rect x="0" y="${H * 0.42}" width="${W}" height="${H * 0.58}" fill="url(#fade)"/>
  <text x="${X}" y="512" font-family="${FONT}" font-weight="800" font-size="68" fill="#ffffff">${TITLE}</text>
  <rect x="${X}" y="536" width="88" height="6" rx="3" fill="${GREEN}"/>
  <text x="${X}" y="592" font-family="${FONT}" font-weight="500" font-size="34" fill="#d9ddd4">${SUBTITLE}</text>
</svg>`;

const info = await sharp(photo)
  .composite([{ input: Buffer.from(overlay), top: 0, left: 0 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(OUT);

console.log(`og-image.jpg: ${info.width}x${info.height}, ${Math.round(info.size / 1024)} KB (crop from y=${top} of ${W}x${scaledH})`);
