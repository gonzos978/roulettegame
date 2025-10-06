const fs = require("fs");
const path = require("path");

const ASSETS_DIR = "public/assets";
const OUTPUT_FILE = "public/assets-manifest.json";

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];
const JSON_EXTENSIONS = [".json"];
const ATLAS_EXTENSIONS = [".atlas"];
const SOUND_EXTENSIONS = [".mp3", ".ogg", ".wav"];
const FONT_EXTENSIONS = [".xml"]; // Include .xml files

function getAssetName(baseName, ext) {
  if (JSON_EXTENSIONS.includes(ext)) {
    return `${baseName}_json`;
  } else if (ATLAS_EXTENSIONS.includes(ext)) {
    return `${baseName}_atlas`;
  } else if (FONT_EXTENSIONS.includes(ext)) {
    return `${baseName}_xml`;
  } else {
    return baseName;
  }
}

function scanDirectory(dir, baseDir = ASSETS_DIR) {
  let assets = [];

  fs.readdirSync(dir, { withFileTypes: true }).forEach((file) => {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory()) {
      assets = assets.concat(scanDirectory(filePath, baseDir));
    } else {
      const ext = path.extname(file.name).toLowerCase();
      const baseName = path.basename(file.name, ext);

      if (
        [
          ...IMAGE_EXTENSIONS,
          ...JSON_EXTENSIONS,
          ...ATLAS_EXTENSIONS,
          ...SOUND_EXTENSIONS,
          ...FONT_EXTENSIONS,
        ].includes(ext)
      ) {
        if (ext === ".xml") {
          const pngPath = path.join(dir, `${baseName}.png`);
          if (fs.existsSync(pngPath)) {
            // bitmap font
            assets.push({
              id: `${baseName}_xml`,
              alias: `${baseName}_xml`,
              src: path.relative(baseDir, filePath).replace(/\\/g, "/"),
              type: "bitmap-font",
            });
          } else {
            // generic XML file
            assets.push({
              id: `${baseName}_xml`,
              alias: `${baseName}_xml`,
              src: path.relative(baseDir, filePath).replace(/\\/g, "/"),
              type: "xml",
            });
          }
        } else {
          const assetName = getAssetName(baseName, ext);

          assets.push({
            id: assetName,
            alias: assetName,
            src: path.relative(baseDir, filePath).replace(/\\/g, "/"),
            type: SOUND_EXTENSIONS.includes(ext) ? "audio" : "image",
          });
        }
      }
    }
  });

  return assets;
}

function generateManifest() {
  const assets = scanDirectory(ASSETS_DIR);

  const manifest = {
    bundles: [
      {
        name: "game-assets",
        assets: assets,
      },
    ],
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 4));
  console.log(`✅ Manifest saved as ${OUTPUT_FILE}`);
}

generateManifest();
