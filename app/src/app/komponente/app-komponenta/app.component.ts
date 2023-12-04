import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  selectedOption: string = 'Smestaji';

  showComponent(option: string): void {
    this.selectedOption = option;
  }
}
