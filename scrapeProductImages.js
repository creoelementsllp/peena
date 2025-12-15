// Product Image Scraper - Updated with correct image URLs
// This script downloads images from the actual product pages
// Run with: node scrapeProductImages.js

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public', 'images', 'products');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Product images from the actual product pages with high-quality URLs
const productImages = [
  // Cold Brew - Zero Hero Deluxe Max Ice Drip
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2025/02/Zero-Hero-Deluxe-MAX-Ice-Drip-Coffee-Maker-300x300-1.png', 
    name: 'cold-brew-maker-1.jpg',
    product: 'Cold Brew Maker'
  },
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2024/04/Zero-Hero-Deluxe-6-scaled.jpg', 
    name: 'cold-brew-maker-2.jpg',
    product: 'Cold Brew System'
  },
  
  // French Press
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2024/04/Screenshot-2024-04-25-at-3.56.07%E2%80%AFPM-1536x1536.png', 
    name: 'french-press-1.jpg',
    product: 'French Press'
  },
  
  // Pour Over Set
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/coffee-set1-1536x1536.jpg', 
    name: 'pour-over-1.jpg',
    product: 'Pour Over Set'
  },
  
  // Espresso Machine
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/06/Machine-Only-Front-View.webp', 
    name: 'espresso-machine-1.jpg',
    product: 'Espresso Machine'
  },
  
  // Drip Coffee Maker
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2024/04/Zero-Hero-Deluxe-4-scaled.jpg', 
    name: 'drip-maker-1.jpg',
    product: 'Drip Maker'
  },
  
  // Indian Filter Coffee - corrected URL
  { 
    url: 'https://cdnnew.toolsvilla.com/products/Heavy%20Duty%2024%20inch%20Indian%20Coffee%20Machine/1582188327024Main%2024%20inch.webp/md', 
    name: 'indian-filter-1.jpg',
    product: 'Indian Filter'
  },
  
  // Barista Tools Set
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Set-of-all.webp', 
    name: 'barista-tools-1.jpg',
    product: 'Barista Tools'
  },
  
  // Coffee Grinder
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Grinder-Copper-Right-side-view.webp', 
    name: 'grinder-1.jpg',
    product: 'Coffee Grinder'
  },
  
  // Milk Frother
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/3.-Frother.jpg', 
    name: 'frother-1.jpg',
    product: 'Milk Frother'
  },
  
  // Coffee Roaster - from Nucleus Link or Aillio Bullet page
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/roaster-1-1.jpg', 
    name: 'roaster-1.jpg',
    product: 'Coffee Roaster'
  },
  
  // Ceramic Coffee Mug - from houseofceramics.in
  { 
    url: 'https://www.houseofceramics.in/cdn/shop/files/HOC_11.10.2022-1026_800x.jpg', 
    name: 'ceramic-mug-1.jpg',
    product: 'Ceramic Mug'
  },
  
  // Chai Cups Set - from eha.eco
  { 
    url: 'https://eha.eco/wp-content/uploads/2024/08/11-46.jpg', 
    name: 'chai-cups-1.jpg',
    product: 'Chai Cups'
  },
  
  // Glass Coffee Cups
  { 
    url: 'https://www.houseofceramics.in/cdn/shop/files/HOC_11.10.2022-1082_800x.jpg', 
    name: 'glass-cups-1.jpg',
    product: 'Glass Cups'
  },
  
  // Travel Tumbler
  { 
    url: 'https://www.houseofceramics.in/cdn/shop/files/HOC_11.10.2022-1067_800x.jpg', 
    name: 'travel-tumbler-1.jpg',
    product: 'Travel Tumbler'
  },
  
  // Coffee Spoons
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/2.-Spoon.jpg', 
    name: 'spoons-1.jpg',
    product: 'Coffee Spoons'
  },
  
  // Tamping Mat
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/5.-Mat.jpg', 
    name: 'tamping-mat-1.jpg',
    product: 'Tamping Mat'
  },
  
  // Coffee Scale
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/1.-Scale.jpg', 
    name: 'scale-1.jpg',
    product: 'Coffee Scale'
  },
  
  // Coffee Storage
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/4.-Container.jpg', 
    name: 'storage-1.jpg',
    product: 'Storage Container'
  },
];

function downloadImage(url, filepath, productName) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : require('http');
    
    protocol.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filepath, productName)
          .then(resolve)
          .catch(reject);
      }

      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${productName} (${path.basename(filepath)})`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if error
      console.error(`✗ Error downloading ${productName}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting product image downloads from specified pages...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const image of productImages) {
    const filepath = path.join(imagesDir, image.name);
    try {
      await downloadImage(image.url, filepath, image.product);
      successCount++;
      // Small delay to be respectful to the servers
      await new Promise(resolve => setTimeout(resolve, 800));
    } catch (error) {
      console.error(`Failed to download ${image.product} (${image.name})`);
      failCount++;
    }
  }
  
  console.log('\n===========================================');
  console.log(`✓ Successfully downloaded: ${successCount} images`);
  if (failCount > 0) {
    console.log(`✗ Failed: ${failCount} images`);
  }
  console.log(`Images saved to: ${imagesDir}`);
  console.log('===========================================');
}

downloadAll();
