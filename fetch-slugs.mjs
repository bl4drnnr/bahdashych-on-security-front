import * as fs from 'fs';
import * as dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

(async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/articles/get-all-posted-articles-slugs`);
    const data = await response.json();

    const slugs = data.map((article) => `${article.articleLanguage}/article/${article.articleSlug}`);

    fs.writeFileSync('articles-slugs.txt', slugs.join('\n'));
  } catch (error) {
    console.error('Error fetching post slugs:', error);
  }
})();
