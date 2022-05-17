import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  template: `
    <p *ngIf="x > 10; else second">{{ x }} is greater than 10</p>

    <ng-template #second>
      <p *ngIf="5 > x; else third">{{ x }} is less than 5</p>
    </ng-template>

    <ng-template #third>
      <p>{{ x }} is between 5 and 10</p>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConditionalRenderingComponent {
  x = Math.floor(Math.random() * 15);
}
