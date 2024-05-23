import dayjs from 'dayjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '@shared/services/article.service';
import { Article } from '@interfaces/article.interface';
import { EnvService } from '@shared/env.service';

@Component({
  selector: 'page-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article;
  articleSlug: string;
  articleNotFound = false;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly envService: EnvService,
    private readonly articleService: ArticleService
  ) {}

  staticStorage = `${this.envService.getStaticStorageLink}/articles-main-pictures/`;

  async handleRedirect(path: string) {
    await this.router.navigate([path]);
  }

  getArticleBySlug() {
    this.articleService.getArticleBySlug(this.articleSlug).subscribe({
      next: (article) => {
        this.article = article;
      },
      error: () => (this.articleNotFound = true)
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      const slug = params.get('slug');

      if (!slug) return await this.handleRedirect('blog');

      this.articleSlug = slug;
      this.getArticleBySlug();
    });
  }

  protected readonly dayjs = dayjs;
}
