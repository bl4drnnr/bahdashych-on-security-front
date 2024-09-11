import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PagesComponentsModule } from '@components/pages-components.module';
import { BasicComponentsModule } from '@components/basic-components.module';
import { LoaderComponent } from './layout-components/loader/loader.component';
import { GlobalMessageComponent } from './layout-components/global-message/global-message.component';

@NgModule({
  exports: [
    PagesComponentsModule,
    BasicComponentsModule,
    GlobalMessageComponent
  ],
  imports: [CommonModule, NgOptimizedImage],
  declarations: [LoaderComponent, GlobalMessageComponent]
})
export class ComponentsModule {}
