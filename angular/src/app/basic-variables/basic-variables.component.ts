import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-variables',
  templateUrl: './basic-variables.component.html',
  styleUrls: ['./basic-variables.component.css']
})
export class BasicVariablesComponent implements OnInit {
  count: number;

  constructor() { 
    this.count = 0;
  }

  ngOnInit(): void {
  }

  handleClick() {
    this.count++;
  }
}
