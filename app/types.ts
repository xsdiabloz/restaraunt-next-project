export type MenuTypes = {
  id: number;
  title: string;
  url: string;
};

export type SliderTypes = {
  id: number;
  title: string;
  image: string;
};

export type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

export type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
};
