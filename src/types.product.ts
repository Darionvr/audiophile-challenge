export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: {
    desktop: string;
  };
  cartImage: string;
  category: string;
  categoryImage: {
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  IncludedItem: {
    quantity: number;
    item: string;
  };
  gallery: object;      
  others: {
    ProductImage: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    OtherProduct: {
      slug: string;
      name: string;
      image: string;
    };
  };      
}