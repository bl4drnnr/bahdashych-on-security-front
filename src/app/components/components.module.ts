import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponentsModule } from './layout-components/layout-components.module';

@NgModule({
  imports: [CommonModule],
  exports: [
    LayoutComponentsModule
  ]
})
export class ComponentsModule {}
