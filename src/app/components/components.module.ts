import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponentsModule } from '@components/pages-components.module';

@NgModule({
  exports: [PagesComponentsModule],
  imports: [CommonModule]
})
export class ComponentsModule {}
