import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dependent-variables',
  template: `
    <button (click)="handleClick()">Count: {{ count }}</button>
    <app-changing-values [count]="count"></app-changing-values>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DependentVariablesComponent {
  count = 1;

  handleClick() {
    this.count++;
  }
}
