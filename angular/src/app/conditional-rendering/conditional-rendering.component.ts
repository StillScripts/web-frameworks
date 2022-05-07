import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  templateUrl: './conditional-rendering.component.html',
  styleUrls: ['./conditional-rendering.component.css']
})
export class ConditionalRenderingComponent implements OnInit {
  x: number;

  constructor() { 
    this.x = 7;
  }

  ngOnInit(): void {
  }

}
