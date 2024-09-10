import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { LayoutsModule } from '@layouts/layouts.module';
import { AboutComponent } from '@pages/about/about.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { PrivacyPolicyComponent } from '@pages/policies/privacy-policy/privacy-policy.component';
import { TacComponent } from '@pages/policies/tac/tac.component';
import { ArticleComponent } from '@pages/article/article.component';
import { CategoryComponent } from '@pages/category/category.component';
import { BlogComponent } from '@pages/blog/blog.component';
import { NewslettersComponent } from './newsletters/newsletters.component';

const components: any = [
  HomeComponent,
  PageNotFoundComponent,
  AboutComponent,
  ContactComponent,
  PrivacyPolicyComponent,
  TacComponent,
  ArticleComponent,
  CategoryComponent,
  BlogComponent,
  NewslettersComponent
];

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'index',
    redirectTo: ''
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'policies/privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'policies/terms-and-conditions',
    component: TacComponent
  },
  {
    path: 'article/:slug',
    component: ArticleComponent
  },
  {
    path: 'category/:category',
    component: CategoryComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'newsletters/:action/:newslettersId',
    component: NewslettersComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [...components],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ComponentsModule,
    LayoutsModule
  ],
  exports: [...components]
})
export class PagesModule {}
