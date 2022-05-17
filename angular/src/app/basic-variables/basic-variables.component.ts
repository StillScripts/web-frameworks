import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-basic-variables',
  template: `
    <button (click)="count = count + 1">
      Clicked {{ count }} {{ count === 1 ? 'time' : 'times' }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicVariablesComponent {
  count = 0;

  // we can also mutate primitives on the template directly
  handleClick() {
    this.count++;
  }
}
