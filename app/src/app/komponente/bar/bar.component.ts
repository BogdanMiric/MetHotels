import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  @Output() optionSelected: EventEmitter<string> = new EventEmitter();

  selectOption(option: string): void {
    this.optionSelected.emit(option);
  }
}
