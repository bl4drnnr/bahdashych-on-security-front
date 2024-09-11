import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GlobalMessageComponent } from '@components/global-message/global-message.component';
import { BasicComponentsModule } from '@components/basic-components.module';
import { TranslocoModule } from '@ngneat/transloco';
import { LoaderComponent } from '@components/loader/loader.component';

const components = [GlobalMessageComponent, LoaderComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NgOptimizedImage,
    BasicComponentsModule,
    TranslocoModule
  ],
  exports: [...components]
})
export class LayoutComponentsModule {}
