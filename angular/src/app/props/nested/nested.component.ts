import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested',
  template: `<p>The answer is {{ answer }}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedComponent {
  @Input() answer: string | number = 'a mystery';
}
