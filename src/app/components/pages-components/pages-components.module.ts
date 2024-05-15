import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { BasicComponentsModule } from '@components/basic-components.module';

const components: any = [
  FooterComponent,
  HeaderComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NgOptimizedImage, BasicComponentsModule],
  exports: [...components]
})
export class PagesComponentsModule {}
