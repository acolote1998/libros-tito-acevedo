export type BookItem = {
  id: string;
  img: string;
  title: string;
  desc: string;
};

export type RegionItem = {
  regionKey: string;
  img: string;
  desc: string;
};

export type SpecificBook = {
  title: string;
  desc: string;
  digital: Array<Region>;
  physical: Array<Region>;
  imgFront: string;
  imgBack: string;
};
export type Region = {
  region: string;
  link: string;
};
