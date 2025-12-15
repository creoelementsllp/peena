const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Create products directory if it doesn't exist
const productsDir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(productsDir)) {
  fs.mkdirSync(productsDir, { recursive: true });
}

// Product images to download
const images = [
  {
    name: 'french-press',
    url: 'https://sipologie.in/products/sipologie-classic-french-press-coffee-maker-for-home-600ml?srsltid=AfmBOopPvJXJE0kQU9VvC95VgvOBbgEzEF7BiQjAip32bIAekIbc0VQF'
  },
  {
    name: 'espresso-machine',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ3mis0xczUQPmX7OxGL0BLtWCuLFHb1YpQw&s'
  },
  {
    name: 'barista-tools',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEJr5ZZ4Vtgd1y1iFW17EFxw0UZyDWfs0TQ&s'
  },
  {
    name: 'roaster',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr4wpobstBOSUfwlVocLj8e6O9efpRwMI8sw&s'
  },
  {
    name: 'ceramic-mug',
    url: 'https://vigneto.in/cdn/shop/products/DSCF7625.jpg?v=1677693216&width=1946'
  },
  {
    name: 'scale',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxE69H2-5neg69Z-iJ9ak31A_1ggMcfWrPcQ&s'
  },
  {
    name: 'pour-over',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-U3fiq8fISxvQJ3A8aUMmLw1cXELY7nBEqA&s'
  },
  {
    name: 'drip-maker',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfRkAcCwQYeqpxvITN_nZX61TXFlHOrBsgag&s'
  },
  {
    name: 'indian-filter',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT18d9TPj1E2FraPnAHe3LOu6ltqukWb6zcsQ&s'
  },
  {
    name: 'grinder',
    url: 'https://m.media-amazon.com/images/I/71Jo8BwI+YL._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'frother',
    url: 'https://assets.pcna.com/q_auto/Images/1032-51BK_D_FR.jpg'
  },
  {
    name: 'chai-cups',
    url: 'https://nestasia.in/cdn/shop/files/tumblersetwithstand_18.jpg?v=1709732791'
  },
  {
    name: 'glass-cups',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_jLVv-NOKd8lotn4IE4deht-SH4hxlHWHQg&s'
  },
  {
    name: 'travel-tumbler',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2t5Kau0rOkjpz4rrsYDSs8iMMsm7thNrjw&s'
  },
  {
    name: 'spoons',
    url: 'https://s.alicdn.com/@sc04/kf/Hb98a37bac3b14ef3ae3e0685645eb2ecv.jpg'
  },
  {
    name: 'tamping-mat',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6b1twpKqVv7xBBiBy4gkFKQtsNFYCee-Vw&s'
  },
  {
    name: 'storage',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUhQhzA0BBQaNwSthqP7VMe6TfRg_MlRDWA&s'
  }
];

function followRedirects(url, callback, maxRedirects = 5) {
  if (maxRedirects === 0) {
    callback(new Error('Too many redirects'));
    return;
  }

  const parsedUrl = new URL(url);
  const protocol = parsedUrl.protocol === 'https:' ? https : http;

  protocol.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
    if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
      const redirectUrl = new URL(response.headers.location, url).toString();
      console.log(`Following redirect to: ${redirectUrl}`);
      followRedirects(redirectUrl, callback, maxRedirects - 1);
    } else {
      callback(null, response);
    }
  }).on('error', callback);
}

function downloadImage(imageInfo, index) {
  return new Promise((resolve, reject) => {
    console.log(`\n[${index + 1}/${images.length}] Downloading ${imageInfo.name}...`);
    console.log(`URL: ${imageInfo.url}`);

    followRedirects(imageInfo.url, (error, response) => {
      if (error) {
        console.error(`✗ Error downloading ${imageInfo.name}:`, error.message);
        resolve(); // Continue with other downloads
        return;
      }

      if (response.statusCode !== 200) {
        console.error(`✗ Failed to download ${imageInfo.name}: HTTP ${response.statusCode}`);
        resolve();
        return;
      }

      // Determine file extension from content-type or URL
      let ext = '.jpg';
      const contentType = response.headers['content-type'];
      if (contentType) {
        if (contentType.includes('png')) ext = '.png';
        else if (contentType.includes('jpeg') || contentType.includes('jpg')) ext = '.jpg';
        else if (contentType.includes('webp')) ext = '.webp';
      }

      const filename = `${imageInfo.name}-1${ext}`;
      const filepath = path.join(productsDir, filename);

      const fileStream = fs.createWriteStream(filepath);

      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Successfully downloaded: ${filename}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete incomplete file
        console.error(`✗ Error saving ${imageInfo.name}:`, err.message);
        resolve();
      });
    });
  });
}

async function downloadAll() {
  console.log('Starting image downloads...\n');
  console.log('='.repeat(60));

  for (let i = 0; i < images.length; i++) {
    await downloadImage(images[i], i);
    // Add a small delay between requests to be respectful
    if (i < images.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('Download process completed!');
  console.log(`Check the ${productsDir} directory for downloaded images.`);
}

downloadAll().catch(console.error);
