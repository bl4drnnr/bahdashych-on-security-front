import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { NavigationSearchComponent } from '@components/navigation-search/navigation-search.component';

const components: any = [
  FooterComponent,
  HeaderComponent,
  NavigationSearchComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NgOptimizedImage],
  exports: [...components]
})
export class PagesComponentsModule {}
