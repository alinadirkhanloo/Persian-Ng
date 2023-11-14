import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button>My Button</button>
  `,
  styles: [
  ]
})
export class ButtonComponent {

}
