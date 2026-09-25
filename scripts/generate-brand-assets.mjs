import { readFile, writeFile, mkdir } from "node:fs/promises";
import sharp from "sharp";

const root = new URL("../", import.meta.url);
const brand = JSON.parse(await readFile(new URL("src/lib/brand.json", root), "utf8"));
const dir = new URL("public/brand/", root);
await mkdir(dir, { recursive: true });

function symbol(satellite = brand.yellow) {
  return '<path d="' + brand.moon + '" fill="currentColor"/><circle cx="44" cy="19" r="10" fill="' + satellite + '" stroke="currentColor" stroke-width="2.5"/>';
}
function lettering() {
  return '<g transform="translate(79 4)" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">' + brand.letters.map(d => '<path d="' + d + '"/>').join("") + '</g>';
}
function svg(content, width, height) {
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '">' + content + '</svg>';
}
function lockup(color = brand.ink, mono = false) {
  return '<g color="' + color + '">' + symbol(mono ? color : brand.yellow) + lettering() + '</g>';
}
const logo = svg(lockup(), 270, 64);
const variants = {
  "lunar-logo.svg": logo,
  "lunar-logo-light.svg": svg(lockup("#ffffff"), 270, 64),
  "lunar-logo-mono.svg": svg(lockup(brand.ink, true), 270, 64),
  "lunar-symbol.svg": svg('<g color="' + brand.ink + '">' + symbol() + '</g>', 64, 64),
};
for (const [name, content] of Object.entries(variants)) await writeFile(new URL(name, dir), content);
await sharp(Buffer.from(logo)).resize(1080, 256).png().toFile(new URL("lunar-logo.png", dir).pathname);

const favicon = svg('<rect width="64" height="64" rx="16" fill="' + brand.yellow + '"/><g color="' + brand.ink + '">' + symbol(brand.ink) + '</g>', 64, 64);
await writeFile(new URL("public/favicon.svg", root), favicon);
await writeFile(new URL("src/app/icon.svg", root), favicon);
for (const [name, size] of [["favicon-96x96.png", 96], ["apple-touch-icon.png", 180]]) {
  await sharp(Buffer.from(favicon)).resize(size, size).png().toFile(new URL("public/" + name, root).pathname);
}
const maskable = svg('<rect width="96" height="96" fill="' + brand.yellow + '"/><g transform="translate(16 16)" color="' + brand.ink + '">' + symbol(brand.ink) + '</g>', 96, 96);
for (const size of [192, 512]) {
  await sharp(Buffer.from(maskable)).resize(size, size).png().toFile(new URL("public/web-app-manifest-" + size + "x" + size + ".png", root).pathname);
}
const sizes = [16, 32, 48];
const pngs = await Promise.all(sizes.map(size => sharp(Buffer.from(favicon)).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2); header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
pngs.forEach((png, index) => {
  const entry = 6 + index * 16;
  header[entry] = sizes[index]; header[entry + 1] = sizes[index];
  header.writeUInt16LE(1, entry + 4); header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(png.length, entry + 8); header.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});
await writeFile(new URL("public/favicon.ico", root), Buffer.concat([header, ...pngs]));

const preview = svg('<rect width="1100" height="680" fill="#f7f4fa"/><rect x="40" y="40" width="1020" height="350" rx="22" fill="#fff"/><g transform="translate(166 122) scale(2.65)">' + lockup() + '</g><rect x="40" y="420" width="495" height="220" rx="18" fill="#292330"/><g transform="translate(113 477) scale(1.3)">' + lockup("#fff") + '</g><g transform="translate(600 452)">' + lockup() + '</g><g transform="translate(600 564) scale(.5)">' + lockup() + '</g><g transform="translate(917 548) scale(.8)">' + '<rect width="64" height="64" rx="16" fill="' + brand.yellow + '"/><g color="' + brand.ink + '">' + symbol(brand.ink) + '</g></g><g transform="translate(990 560) scale(.375)" color="' + brand.ink + '">' + symbol(brand.ink) + '</g>', 1100, 680);
await sharp(Buffer.from(preview)).png().toFile(new URL("lunar-logo-preview.png", dir).pathname);

const ogBase = '<rect width="1200" height="630" fill="#faf8fd"/><rect x="30" y="30" width="1140" height="570" rx="22" fill="#fff" stroke="#e7dfef"/><g transform="translate(72 64) scale(1.08)">' + lockup() + '</g>';
const ogHome = svg(ogBase + '<g font-family="Helvetica,Arial,sans-serif" fill="#292330"><text x="75" y="205" font-size="18" fill="#877294">Enterprise AI Lab</text><text x="72" y="294" font-size="76" font-weight="700" letter-spacing="-3">RL environments.</text><text x="72" y="378" font-size="76" font-weight="700" letter-spacing="-3">Small language models.</text><text x="76" y="447" font-size="24" fill="#71687c">From environment design and training to evaluation and deployment.</text><rect x="76" y="496" width="514" height="48" rx="8" fill="#ffdc70"/><text x="99" y="527" font-size="18" font-weight="600">Your team. Your data. Your infrastructure.</text><path d="m1085 85 8 26 26 8-26 8-8 26-8-26-26-8 26-8Z" fill="#c4b6d5"/></g>', 1200, 630);
await sharp(Buffer.from(ogHome)).png().toFile(new URL("public/og-lunar.png", root).pathname);
const ogLab = svg('<rect width="1200" height="630" fill="#f4eff9"/><g transform="translate(68 46) scale(1.05)">' + lockup() + '</g><g font-family="Helvetica,Arial,sans-serif" fill="#292330"><text x="75" y="165" font-size="16" fill="#8d749e">Lunar Research &amp; Engineering</text><text x="70" y="284" font-size="103" font-weight="800" letter-spacing="-6">Super cool</text><text x="70" y="420" font-size="145" font-weight="800" letter-spacing="-8">AI lab ✳</text><text x="75" y="493" font-size="26">We believe in systems</text><text x="75" y="530" font-size="26">that manage themselves.</text></g><g transform="translate(735 165)"><ellipse cx="170" cy="150" rx="171" ry="190" stroke="#c9b6da" fill="none" stroke-dasharray="5 9" transform="rotate(20 170 150)"/><rect x="65" y="80" width="220" height="205" rx="82" fill="#ffdc70" stroke="#574833" stroke-width="3" transform="rotate(-8 175 182)"/><rect x="161" y="35" width="33" height="48" rx="17" fill="#cdb2e1" stroke="#574833" stroke-width="2"/><g fill="#493b37"><ellipse cx="130" cy="165" rx="7" ry="12"/><ellipse cx="204" cy="155" rx="7" ry="12"/></g><path d="M153 193q20 27 37-5" fill="none" stroke="#493b37" stroke-width="3" stroke-linecap="round"/><ellipse cx="110" cy="189" rx="15" ry="8" fill="#f0a57e"/><ellipse cx="231" cy="177" rx="15" ry="8" fill="#f0a57e"/><text x="289" y="70" font-size="60" fill="#b094c4">✦</text><text x="19" y="320" font-size="50" fill="#b094c4">✳</text></g>', 1200, 630);
await sharp(Buffer.from(ogLab)).png().toFile(new URL("public/og-lunar-lab.png", root).pathname);
console.log("Generated Lunar SVG/PNG logos, preview, favicons, app icons, and sharing images.");
