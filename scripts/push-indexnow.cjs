const https = require('https');
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sitemapPath = path.join(projectRoot, 'docs', '.vuepress', 'public', 'sitemap.xml');

const host = 'pushts.com';
const key = '7ec54bed5e684bee9e50ea059b0e5538';
const keyLocation = `https://${host}/${key}.txt`;

console.log('[IndexNow] 开始向 Bing / IndexNow / Yandex 提交全站 URL...');

if (!fs.existsSync(sitemapPath)) {
  console.error('[IndexNow] 错误: 未找到 sitemap.xml，请先运行 pnpm build');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const locMatches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
const urlList = locMatches.map(m => m[1]);

console.log(`[IndexNow] 待提交 URL 数量: ${urlList.length} 条`);

const payload = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urlList,
});

const endpoints = [
  'api.indexnow.org',
  'www.bing.com',
  'yandex.com'
];

endpoints.forEach((hostname) => {
  const options = {
    hostname: hostname,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`[IndexNow -> ${hostname}] 状态码: ${res.statusCode} ${res.statusMessage}`);
    });
  });

  req.on('error', (err) => {
    console.error(`[IndexNow -> ${hostname}] 错误:`, err.message);
  });

  req.write(payload);
  req.end();
});

