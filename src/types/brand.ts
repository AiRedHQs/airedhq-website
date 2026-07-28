export type ProductId = "hiared" | "gobazaar" | "yojiq";

export type ProductAccent = {
  id: ProductId;
  name: string;
  token: string;
};

export type BrandId = "airedhq" | ProductId;

export type BrandToken = {
  id: BrandId;
  name: string;
  accent: string;
};
