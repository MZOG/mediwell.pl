export type TypePortfolioItem = {
  id: number;
  attributes: {
    title: string;
    description: string;
    updatedAt: string;
    publishedAt: string;
    createdAt: string;
    image: string;
    slug: string;
  };
};

export type TypeCategoryItem = {
  name: string;
  slug: string;
  href?: string;
};
