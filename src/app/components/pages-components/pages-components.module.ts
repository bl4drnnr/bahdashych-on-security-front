import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavigationBarComponent } from '@components/navigation-bar/navigation-bar.component';

const components: any = [NavigationBarComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NgOptimizedImage],
  exports: [...components]
})
export class PagesComponentsModule {}

