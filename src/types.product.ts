export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: {
    desktop: string;
    // agrega otras resoluciones si las necesitas
  };
  cartImage: string;
  category: string;
  categoryImage: {
    desktop: string;
    // agrega otras resoluciones si las necesitas
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includedItems: any[]; // tipa mejor si tienes la estructura
  gallery: object;      // tipa mejor si tienes la estructura
  others: any[];        // tipa mejor si tienes la estructura
}