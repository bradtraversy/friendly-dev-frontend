export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
  category: string;
  featured: boolean;
};

export type PostMeta = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};
