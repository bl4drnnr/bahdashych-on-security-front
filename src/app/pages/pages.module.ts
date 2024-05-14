import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@components/components.module';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { LayoutsModule } from '@layouts/layouts.module';

const components: any = [HomeComponent, PageNotFoundComponent];

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
