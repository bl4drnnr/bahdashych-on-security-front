import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '@pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@components/components.module';

const components: any = [HomeComponent];

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
  }
];


@NgModule({
  declarations: [...components],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    ComponentsModule
  ],
  exports: [...components]
})
export class PagesModule { }
