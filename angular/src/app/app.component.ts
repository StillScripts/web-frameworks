import { Component } from '@angular/core';

enum Components {
  HelloWorld,
  Styling,
  NestingComponents,
  HTML,
  BasicVariables,
  DependentVariables,
  Props,
  ConditionalRendering,
  ListLooping
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  currentComponent: Components;

  constructor() {
    this.currentComponent = Components.HelloWorld;
  }

  handleSwitch(newComponent: Components) {
		this.currentComponent = newComponent;
	};
}
