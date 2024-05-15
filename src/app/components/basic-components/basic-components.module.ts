import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@components/input/input.component';
import { TextareaComponent } from '@components/textarea/textarea.component';
import { ButtonComponent } from '@components/button/button.component';

const components = [InputComponent, TextareaComponent, ButtonComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule, FormsModule],
  exports: [...components]
})
export class BasicComponentsModule { }
