import fg from 'fast-glob';
import fs from 'fs';

async function processCssFiles() {
  const buildDir = 'dist';
  
  const cssFiles = await fg(`./${buildDir}/**/*.css`);
  const hashes = (await fg(`./${buildDir}/**/*`))
    .map((path) => path.replace(`./${buildDir}/`, '/'))
    .map((path) => {
      const parts = path.split('/').pop().split('.');
      const hash = parts[parts.length - 2];
      if (hash.length === 8 && /^[0-9a-f]+$/.test(hash)) return [path, hash];
    })
    .filter(Boolean);
  
  cssFiles.forEach((path) => {
    const content = fs.readFileSync(path, 'utf8');
    let newContent = content;
    
    const viteAssets = content.match(/__VITE_ASSET__[0-9a-f]{8}__/g);
    if (viteAssets) {
      viteAssets.forEach((viteAsset) => {
        const hash = viteAsset.replace('__VITE_ASSET__', '').replace('__', '');
        const hashFile = hashes.find((h) => h[1] === hash)[0];
        newContent = newContent.replace(viteAsset, `"${hashFile}"`);
      });
    }
    
    fs.writeFileSync(path, newContent);
  });
}

export default processCssFiles;
