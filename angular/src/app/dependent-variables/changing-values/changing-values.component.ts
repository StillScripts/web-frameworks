import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-changing-values',
  templateUrl: './changing-values.component.html',
  styleUrls: ['./changing-values.component.css']
})
export class ChangingValuesComponent implements OnInit {
  /**
   * Angular doesn't allow you to trigger methods when local variable changes...
   * ngOnChanges() can be used for when Input() values are changes.  
   * Therefore, this example uses props and ngOnChanges() in the child component.
   */
  @Input() count: number = 1;
  doubled: number;
  quadrupled: number;

  constructor() {
    this.doubled = 2;
    this.quadrupled = 4;
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.doubled = this.count * 2;
    this.quadrupled = this.count * 4;
  }

}
