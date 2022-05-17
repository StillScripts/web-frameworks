import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: ` <p>Hello {{ name }}!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent {
  name = 'world';
}
