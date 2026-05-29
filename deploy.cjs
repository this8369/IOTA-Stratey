const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const publishDir = path.join(__dirname, 'publish');
const appDir = path.join(publishDir, 'IOTA-Stratey');

// 1. Build the app
console.log('Building the app...');
execSync('npm run build', { stdio: 'inherit' });

// 2. Prepare publish directory
console.log('Preparing publish directory...');
if (fs.existsSync(publishDir)) {
    fs.rmSync(publishDir, { recursive: true, force: true });
}
fs.mkdirSync(publishDir);
fs.mkdirSync(appDir);

// 3. Copy dist contents to publish/IOTA-Stratey
console.log('Copying dist to subfolder...');
execSync(`cp -R dist/* "${appDir}"`, { stdio: 'inherit' });

// 4. Create CNAME at the root
console.log('Creating CNAME...');
fs.writeFileSync(path.join(publishDir, 'CNAME'), 'iotaseoul.site\n');

// 5. Create redirect at the root
console.log('Creating redirect index.html...');
const redirectHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0; url=/IOTA-Stratey/" />
</head>
<body>
    <p>Redirecting to <a href="/IOTA-Stratey/">/IOTA-Stratey/</a>...</p>
</body>
</html>`;
fs.writeFileSync(path.join(publishDir, 'index.html'), redirectHtml);

// 6. Deploy using gh-pages
console.log('Deploying to gh-pages...');
execSync('npx gh-pages -d publish', { stdio: 'inherit' });
console.log('Deployment complete!');
