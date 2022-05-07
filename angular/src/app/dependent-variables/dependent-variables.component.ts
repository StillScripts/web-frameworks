import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependent-variables',
  templateUrl: './dependent-variables.component.html',
  styleUrls: ['./dependent-variables.component.css'],
})
export class DependentVariablesComponent implements OnInit {
  count: number;

  constructor() {
    this.count = 1;
  }

  ngOnInit(): void {
  }

  handleClick() {
		this.count++; 
	}


}
