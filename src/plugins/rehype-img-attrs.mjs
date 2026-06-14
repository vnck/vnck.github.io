import { visit } from 'unist-util-visit';
import { readFileSync } from 'node:fs';
import path from 'node:path';

// Pure-JS intrinsic dimension readers (no native deps).
function pngSize(buf) {
  // PNG signature (8) + IHDR length/type (8) then width/height as BE uint32.
  if (buf.length < 24 || buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function jpegSize(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let off = 2;
  while (off + 9 < buf.length) {
    if (buf[off] !== 0xff) { off++; continue; }
    const marker = buf[off + 1];
    // Start-of-Frame markers carry the dimensions.
    const isSOF =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);
    if (isSOF) {
      return { height: buf.readUInt16BE(off + 5), width: buf.readUInt16BE(off + 7) };
    }
    if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) {
      off += 2;
    } else {
      off += 2 + buf.readUInt16BE(off + 2); // skip this segment
    }
  }
  return null;
}

function webpSize(buf) {
  if (buf.length < 30) return null;
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const fourcc = buf.toString('ascii', 12, 16);
  if (fourcc === 'VP8 ') { // lossy
    return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (fourcc === 'VP8L') { // lossless
    const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
    return {
      width: 1 + (((b1 & 0x3f) << 8) | b0),
      height: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)),
    };
  }
  if (fourcc === 'VP8X') { // extended
    return {
      width: 1 + (buf[24] | (buf[25] << 8) | (buf[26] << 16)),
      height: 1 + (buf[27] | (buf[28] << 8) | (buf[29] << 16)),
    };
  }
  return null;
}

function intrinsicSize(file) {
  try {
    const buf = readFileSync(file);
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png') return pngSize(buf);
    if (ext === '.jpg' || ext === '.jpeg') return jpegSize(buf);
    if (ext === '.webp') return webpSize(buf);
  } catch {}
  return null;
}

// Adds loading="lazy" + decoding="async" to every <img>, and intrinsic
// width/height to local images so the browser can reserve space (no CLS).
export default function rehypeImgAttrs() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'img' || !node.properties) return;
      const props = node.properties;
      if (props.loading == null) props.loading = 'lazy';
      if (props.decoding == null) props.decoding = 'async';

      const src = props.src;
      if (typeof src !== 'string' || /^https?:/i.test(src)) return; // skip remote
      if (props.width != null || props.height != null) return; // respect existing

      const m = src.match(/assets\/.+$/);
      if (!m) return;
      const file = path.join(process.cwd(), 'public', m[0]);
      const size = intrinsicSize(file);
      if (size) {
        props.width = String(size.width);
        props.height = String(size.height);
      }
    });
  };
}
