import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayout } from '@layouts/default/default.component';
import { PagesComponentsModule } from '@components/pages-components.module';

const components = [DefaultLayout];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, PagesComponentsModule],
  exports: [...components]
})
export class LayoutsModule {}
