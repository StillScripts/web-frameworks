import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Pipe,
  PipeTransform,
} from '@angular/core';

@Component({
  selector: 'app-changing-values',
  template: `
    <p>{{ count }} * 2 = {{ count | multiply: 2 }}</p>
    <p>{{ count | multiply: 2 }} * 2 = {{ count | multiply: 4 }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangingValuesComponent {
  /**
   * Angular doesn't allow you to trigger methods when local variable changes...
   * ngOnChanges() can be used for when Input() values are changes.
   * Therefore, this example uses props and ngOnChanges() in the child component.
   */
  @Input() count = 1;

  // Instead of ngOnChanges, if you have simple Input, use Getter/Setter Input
  // @Input() set count(count: number) {
  //   this._count = count;
  //   this.doubled = count * 2;
  //   this.quadrupled = count * 4;
  // }
  // get count() {
  //   return this._count;
  // }
  //
  // private _count = 1;
  // doubled = 2;
  // quadrupled = 4;

  // a Pipe is also a good solution
}

// Note: count | multiply:2 is used TWICE on the template.
// Pipe is pure by default but because it is used TWICE. It is TWO instances of MultiplyPipe
// You can memoize the transform method manually to achieve TRUE memoization
@Pipe({ name: 'multiply' })
export class MultiplyPipe implements PipeTransform {
  transform(value: number, multipler: number): number {
    return value * multipler;
  }
}
