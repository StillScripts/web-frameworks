import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-html',
  template: ` <p>here's some <ng-content></ng-content></p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HTMLComponent {}
