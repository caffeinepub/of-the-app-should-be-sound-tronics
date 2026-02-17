export interface Product {
  id: string;
  name: string;
  description: string;
  price?: number;
  image?: string;
}

export const products: Product[] = [
  {
    id: 'cable-marking-stickers',
    name: 'Cable marking stickers',
    description: 'Professional cable identification stickers for organized studio setups',
    price: 12.99,
  },
  {
    id: 'xlr-cables',
    name: 'XLR cables',
    description: 'High-quality balanced audio cables for professional recording',
    price: 24.99,
  },
  {
    id: 'used-musical-instruments',
    name: 'Used musical instruments',
    description: 'Pre-owned instruments in excellent condition, professionally tested',
    // No price set to demonstrate price unavailable handling
  },
];
