import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponentsModule } from '@components/pages-components.module';
import { BasicComponentsModule } from '@components/basic-components.module';

@NgModule({
  exports: [PagesComponentsModule, BasicComponentsModule],
  imports: [CommonModule]
})
export class ComponentsModule {}
