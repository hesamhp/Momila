import { writeFileSync } from "node:fs";
import sharp from "sharp";

const size = 512;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="${size}" height="${size}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#B798EE"/>
      <stop offset="0.55" stop-color="#9E78E5"/>
      <stop offset="1" stop-color="#744FC4"/>
    </linearGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1.2" result="blur"/>
      <feOffset dy="1.2" result="offset"/>
      <feFlood flood-color="#4A2E8C" flood-opacity="0.25"/>
      <feComposite in2="offset" operator="in" result="shadow"/>
      <feMerge>
        <feMergeNode in="shadow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect x="2" y="2" width="44" height="44" rx="15" fill="url(#g)"/>
  <rect x="6" y="4.5" width="26" height="7" rx="3.5" fill="#FFFFFF" opacity="0.16"/>

  <g filter="url(#soft)">
    <path d="M24 8.5l1.4 3.1 3.1 1.4-3.1 1.4L24 17.5l-1.4-3.1-3.1-1.4 3.1-1.4Z" fill="#F9D88B"/>
    <circle cx="33" cy="10.5" r="1.7" fill="#F6CFE7"/>
    <path d="M13 21c3.5-2.5 7.5-2.5 11 0 3.5-2.5 7.5-2.5 11 0v12c-3.5-2.5-7.5-2.5-11 0-3.5-2.5-7.5-2.5-11 0Z" fill="#FFFFFF"/>
    <path d="M24 21v12" stroke="#744FC4" stroke-opacity="0.35" stroke-width="1.6" stroke-linecap="round"/>
  </g>
</svg>`;

const png = await sharp(Buffer.from(svg), { density: 400 })
  .resize(size, size)
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync("public/images/logo.png", png);
console.log(`logo.png created (${png.length} bytes)`);
