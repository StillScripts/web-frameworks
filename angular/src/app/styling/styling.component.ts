import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  template: `<p>Styled!</p>`,
  styles: [
    `
      p {
        color: purple;
        font-family: 'Comic Sans MS', cursive;
        font-size: 2em;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylingComponent {}
