import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nesting-components',
  template: `
    <p>These styles</p>
    <app-nested-component></app-nested-component>
  `,
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
export class NestingComponentsComponent {}
