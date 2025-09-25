import { ObjectId } from "mongodb"

export interface Product {
  _id: ObjectId;
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: {
    desktop: string;
    mobile: string;
    tablet: string
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
  includedItems: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    second: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
    third: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      desktop: string;
      tablet: string;
      mobile: string;
    };
  }[];

}