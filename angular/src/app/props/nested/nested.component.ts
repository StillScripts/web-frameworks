import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
  @Input() answer: string|number = "a mystery";
  constructor() {
   }

  ngOnInit(): void {
  }

}
