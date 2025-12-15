export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'Tea' | 'Coffee' | 'Wine' | 'Beer' | 'Specialty';
  prepTime: string;
  author: string;
  isPremium?: boolean;
  ingredients?: string[];
  instructions?: string[];
  servings?: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

export interface Journal {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
  author: string;
  readTime: string;
  content: string[];
  tags: string[];
}

export interface DailyFeature {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  images?: string[];
  category: 'brewing-machines' | 'manual-tools' | 'automatic-machines' | 'cutlery' | 'coffee-mugs' | 'accessories';
  subcategory?: string;
  inStock: boolean;
  featured?: boolean;
  specifications?: {
    material?: string;
    capacity?: string;
    dimensions?: string;
    weight?: string;
    color?: string;
    warranty?: string;
    [key: string]: string | undefined;
  };
  features?: string[];
  rating?: number;
  reviews?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}