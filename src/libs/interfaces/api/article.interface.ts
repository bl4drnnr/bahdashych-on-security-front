export interface Article {
  articleName: string;
  articleSlug: string;
  articleDescription: string;
  articleTags: Array<string>;
  articleContent: string;
  articleImage: string;
  createdAt: Date;
  category: { categoryName: string };
}
