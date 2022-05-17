import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-looping',
  template: `
    <h1>The Famous Cats of YouTube</h1>
    <ul>
      <!-- Note: ngFor does not have automatic tracking key (eg: like in React you'd have key={}) -->
      <!-- To implement a tracking method, use trackBy. Eg: ngFor="let item of array;trackBy: trackByFn" -->
      <!-- define trackByFn in the component class -->
      <li *ngFor="let cat of cats; let i = index">
        <a target="_blank" href="https://www.youtube.com/watch?v={{ cat.id }}">
          {{ i + 1 }}: {{ cat.name }}
        </a>
      </li>
    </ul>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListLoopingComponent {
  cats = [
    { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
    { id: 'z_AbfPXTKms', name: 'Maru' },
    { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' },
  ];
}
