import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'basic-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string;
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() value: string;

  @Output() valueChange = new EventEmitter<string>();

  onInput() {
    this.valueChange.emit(this.value);
  }
}
