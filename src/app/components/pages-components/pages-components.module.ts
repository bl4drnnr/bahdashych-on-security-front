import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { BasicComponentsModule } from '@components/basic-components.module';
import { FormsModule } from '@angular/forms';
import { AboutTeamCellComponent } from '@components/about-team-cell/about-team-cell.component';

const components: any = [
  FooterComponent,
  HeaderComponent,
  AboutTeamCellComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, NgOptimizedImage, BasicComponentsModule, FormsModule],
  exports: [...components]
})
export class PagesComponentsModule {}
