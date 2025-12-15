// Image Download Script
// Run this with: node downloadImages.js

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

// Unsplash images for specific coffee products
const images = [
  // Cold Brew Makers
  { url: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80&fm=jpg', name: 'cold-brew-maker-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80&fm=jpg', name: 'cold-brew-maker-2.jpg' },
  
  // French Press
  { url: 'https://images.unsplash.com/photo-1611564354208-0d9e2f0e29ae?w=800&q=80&fm=jpg', name: 'french-press-1.jpg' },
  
  // Pour Over
  { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&fm=jpg', name: 'pour-over-1.jpg' },
  
  // Espresso Machine
  { url: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80&fm=jpg', name: 'espresso-machine-1.jpg' },
  
  // Drip Coffee Maker
  { url: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80&fm=jpg', name: 'drip-maker-1.jpg' },
  
  // Indian Filter Coffee
  { url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80&fm=jpg', name: 'indian-filter-1.jpg' },
  
  // Barista Tools
  { url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80&fm=jpg', name: 'barista-tools-1.jpg' },
  
  // Coffee Grinder
  { url: 'https://images.unsplash.com/photo-1556910636-196569d654e0?w=800&q=80&fm=jpg', name: 'grinder-1.jpg' },
  
  // Milk Frother
  { url: 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?w=800&q=80&fm=jpg', name: 'frother-1.jpg' },
  
  // Coffee Roaster
  { url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&fm=jpg', name: 'roaster-1.jpg' },
  
  // Coffee Mugs
  { url: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80&fm=jpg', name: 'ceramic-mug-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80&fm=jpg', name: 'chai-cups-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=800&q=80&fm=jpg', name: 'glass-cups-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=800&q=80&fm=jpg', name: 'travel-tumbler-1.jpg' },
  
  // Accessories
  { url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80&fm=jpg', name: 'spoons-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80&fm=jpg', name: 'tamping-mat-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80&fm=jpg', name: 'scale-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80&fm=jpg', name: 'storage-1.jpg' },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file if error
      console.error(`✗ Error downloading ${path.basename(filepath)}:`, err.message);
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('Starting image downloads...\n');
  
  for (const image of images) {
    const filepath = path.join(imagesDir, image.name);
    try {
      await downloadImage(image.url, filepath);
      // Small delay to be respectful to the server
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (error) {
      console.error(`Failed to download ${image.name}`);
    }
  }
  
  console.log('\n✓ All images downloaded!');
  console.log(`Images saved to: ${imagesDir}`);
}

downloadAll();
