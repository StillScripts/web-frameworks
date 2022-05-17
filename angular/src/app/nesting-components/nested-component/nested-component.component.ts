import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nested-component',
  template: `<p>...don't affect this element</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedComponentComponent {}
