// Additional Product Images Downloader
// Downloads multiple images per product for gallery and detail views
// Run with: node downloadAdditionalImages.js

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

// Additional product images from various angles and contexts
const additionalImages = [
  // Cold Brew Maker - additional views
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2024/04/Zero-Hero-Deluxe-1-scaled.jpg', 
    name: 'cold-brew-maker-3.jpg',
    product: 'Cold Brew Maker - Front'
  },
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2024/04/Zero-Hero-Deluxe-3-scaled.jpg', 
    name: 'cold-brew-maker-4.jpg',
    product: 'Cold Brew Maker - Side'
  },
  
  // French Press - additional views
  { 
    url: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80', 
    name: 'french-press-2.jpg',
    product: 'French Press - In Use'
  },
  { 
    url: 'https://images.unsplash.com/photo-1611564354208-0d9e2f0e29ae?w=800&q=80', 
    name: 'french-press-3.jpg',
    product: 'French Press - Detail'
  },
  
  // Pour Over - additional views
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Zero-Hero-Prisma-PCTG-Dripper-scaled.jpg', 
    name: 'pour-over-2.jpg',
    product: 'Pour Over - Dripper'
  },
  { 
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', 
    name: 'pour-over-3.jpg',
    product: 'Pour Over - Brewing'
  },
  
  // Espresso Machine - additional views
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/06/Budan-PRO-SA101T.webp', 
    name: 'espresso-machine-2.jpg',
    product: 'Espresso Machine - Side'
  },
  { 
    url: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80', 
    name: 'espresso-machine-3.jpg',
    product: 'Espresso Machine - Action'
  },
  
  // Drip Coffee Maker - additional
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2024/04/Zero-Hero-Deluxe-2-scaled.jpg', 
    name: 'drip-maker-2.jpg',
    product: 'Drip Maker - Detail'
  },
  
  // Indian Filter - additional
  { 
    url: 'https://cdnnew.toolsvilla.com/products-24inchindiancoffeemachine/1736742593321/1736742601538-watmrkP.webp/xs', 
    name: 'indian-filter-2.jpg',
    product: 'Indian Filter - Side'
  },
  { 
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80', 
    name: 'indian-filter-3.jpg',
    product: 'Indian Filter - Traditional'
  },
  
  // Barista Tools - individual tools
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Budan-Dosing-cup-1.webp', 
    name: 'barista-tools-2.jpg',
    product: 'Barista Tools - Dosing Cup'
  },
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Budan-58mm-Magnet-Dosing-Funnel.webp', 
    name: 'barista-tools-3.jpg',
    product: 'Barista Tools - Funnel'
  },
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Budan-LevelerDistributor.webp', 
    name: 'barista-tools-4.jpg',
    product: 'Barista Tools - Leveler'
  },
  
  // Coffee Grinder - additional views
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Grinder-Copper-Front-side-view.webp', 
    name: 'grinder-2.jpg',
    product: 'Coffee Grinder - Front'
  },
  { 
    url: 'https://images.unsplash.com/photo-1556910636-196569d654e0?w=800&q=80', 
    name: 'grinder-3.jpg',
    product: 'Coffee Grinder - Action'
  },
  
  // Milk Frother - additional
  { 
    url: 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=800&q=80', 
    name: 'frother-2.jpg',
    product: 'Milk Frother - In Use'
  },
  
  // Coffee Roaster - additional views
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Aillio-Bullet-R1-V2-Black.jpg', 
    name: 'roaster-2.jpg',
    product: 'Coffee Roaster - Aillio Bullet'
  },
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Nucleus-Link-Roaster.webp', 
    name: 'roaster-3.jpg',
    product: 'Coffee Roaster - Nucleus'
  },
  
  // Ceramic Mugs - various styles
  { 
    url: 'https://www.houseofceramics.in/cdn/shop/files/HOC_11.10.2022-1026_800x.jpg', 
    name: 'ceramic-mug-2.jpg',
    product: 'Ceramic Mug - White'
  },
  { 
    url: 'https://www.houseofceramics.in/cdn/shop/files/Jolly_Reindeer_Mug.jpg?v=1764244276&width=360', 
    name: 'ceramic-mug-3.jpg',
    product: 'Ceramic Mug - Jolly Reindeer'
  },
  { 
    url: 'https://www.houseofceramics.in/cdn/shop/files/IMG-20251125-WA0214.jpg?v=1764244088&width=360', 
    name: 'ceramic-mug-4.jpg',
    product: 'Ceramic Mug - Merry'
  },
  { 
    url: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80', 
    name: 'ceramic-mug-5.jpg',
    product: 'Ceramic Mug - Classic'
  },
  
  // Chai Cups - additional views
  { 
    url: 'https://eha.eco/wp-content/uploads/2024/08/12-46.jpg', 
    name: 'chai-cups-2.jpg',
    product: 'Chai Cups - Set View'
  },
  { 
    url: 'https://eha.eco/wp-content/uploads/2024/08/13-41.jpg', 
    name: 'chai-cups-3.jpg',
    product: 'Chai Cups - Different Colors'
  },
  { 
    url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80', 
    name: 'chai-cups-4.jpg',
    product: 'Chai Cups - Traditional'
  },
  
  // Glass Cups - additional styles
  { 
    url: 'https://www.houseofceramics.in/cdn/shop/files/Festive_Check_Mug.jpg?v=1764243893&width=360', 
    name: 'glass-cups-2.jpg',
    product: 'Glass Cups - Festive'
  },
  { 
    url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&q=80', 
    name: 'glass-cups-3.jpg',
    product: 'Glass Cups - Double Wall'
  },
  
  // Travel Tumbler - additional
  { 
    url: 'https://www.houseofceramics.in/cdn/shop/files/Merry_Tree_Mug.jpg?v=1764222380&width=360', 
    name: 'travel-tumbler-2.jpg',
    product: 'Travel Tumbler - Merry Tree'
  },
  { 
    url: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80', 
    name: 'travel-tumbler-3.jpg',
    product: 'Travel Tumbler - Stainless'
  },
  
  // Coffee Spoons - additional
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Budan-Cupping-Spoon.webp', 
    name: 'spoons-2.jpg',
    product: 'Coffee Spoons - Cupping'
  },
  { 
    url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80', 
    name: 'spoons-3.jpg',
    product: 'Coffee Spoons - Set'
  },
  
  // Tamping Mat - additional
  { 
    url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80', 
    name: 'tamping-mat-2.jpg',
    product: 'Tamping Mat - Silicon'
  },
  
  // Coffee Scale - additional
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Timemore-Black-Mirror-Basic-Plus-Coffee-Scale.webp', 
    name: 'scale-2.jpg',
    product: 'Coffee Scale - Digital'
  },
  { 
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', 
    name: 'scale-3.jpg',
    product: 'Coffee Scale - In Use'
  },
  
  // Coffee Storage - additional
  { 
    url: 'https://kaapimachines.com/wp-content/uploads/2023/07/Budan-Cupping-Bowl.webp', 
    name: 'storage-2.jpg',
    product: 'Coffee Storage - Canister'
  },
  { 
    url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80', 
    name: 'storage-3.jpg',
    product: 'Coffee Storage - Beans'
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
  console.log('Starting additional product image downloads...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const image of additionalImages) {
    const filepath = path.join(imagesDir, image.name);
    try {
      await downloadImage(image.url, filepath, image.product);
      successCount++;
      // Small delay to be respectful to the servers
      await new Promise(resolve => setTimeout(resolve, 600));
    } catch (error) {
      console.error(`Failed to download ${image.product} (${image.name})`);
      failCount++;
    }
  }
  
  console.log('\n===========================================');
  console.log(`✓ Successfully downloaded: ${successCount} additional images`);
  if (failCount > 0) {
    console.log(`✗ Failed: ${failCount} images`);
  }
  console.log(`Total images in products folder: ${successCount + 19}`);
  console.log(`Images saved to: ${imagesDir}`);
  console.log('===========================================');
}

downloadAll();
