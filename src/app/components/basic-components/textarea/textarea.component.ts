import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'basic-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input() label: string;
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() value: string;

  @Output() valueChange = new EventEmitter<string>();

  onInput() {
    this.valueChange.emit(this.value);
  }
}
