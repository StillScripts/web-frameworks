import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-props',
  template: `
    <app-nested></app-nested>
    <app-nested [answer]="42"></app-nested>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PropsComponent {}
