import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PagesComponentsModule } from '@components/pages-components.module';
import { BasicComponentsModule } from '@components/basic-components.module';
import { LayoutComponentsModule } from '@components/layout-components.module';

@NgModule({
  exports: [
    PagesComponentsModule,
    BasicComponentsModule,
    LayoutComponentsModule
  ],
  imports: [CommonModule, NgOptimizedImage],
  declarations: []
})
export class ComponentsModule {}
