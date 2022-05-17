import { DOCUMENT } from '@angular/common';
import {
  Component,
  ComponentRef,
  Inject,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { BasicVariablesComponent } from './basic-variables/basic-variables.component';
import { ConditionalRenderingComponent } from './conditional-rendering/conditional-rendering.component';
import { DependentVariablesComponent } from './dependent-variables/dependent-variables.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HTMLComponent } from './html/html.component';
import { ListLoopingComponent } from './list-looping/list-looping.component';
import { NestingComponentsComponent } from './nesting-components/nesting-components.component';
import { PropsComponent } from './props/props.component';
import { StylingComponent } from './styling/styling.component';

const componentsMap = {
  HelloWorld: () => HelloWorldComponent,
  Styling: () => StylingComponent,
  NestingComponents: () => NestingComponentsComponent,
  Props: () => PropsComponent,
  HTML: () => HTMLComponent,
  BasicVariables: () => BasicVariablesComponent,
  DependentVariables: () => DependentVariablesComponent,
  ConditionalRendering: () => ConditionalRenderingComponent,
  ListLooping: () => ListLoopingComponent,
} as const;

type ComponentKeys = keyof typeof componentsMap;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private componentRef?: ComponentRef<unknown>;

  @ViewChild('anchor', { static: true, read: ViewContainerRef })
  anchor!: ViewContainerRef;

  // We inject DOCUMENT here so we do not rely solely on DOM object
  // This is useful for SSR and for Testing (because we can inject a mock document object)
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.componentRef = this.anchor.createComponent(componentsMap.HelloWorld());
    this.componentRef.changeDetectorRef.markForCheck();
  }

  handleSwitch(newComponent: ComponentKeys) {
    if (this.componentRef) {
      this.componentRef.destroy();
    }

    const componentFactory = componentsMap[newComponent];
    this.componentRef = this.anchor.createComponent(
      componentFactory() as Type<unknown>,
      // For dynamic approach, this is needed
      {
        projectableNodes:
          newComponent === 'HTML'
            ? [[this.document.createTextNode('HTML!!!')]]
            : [],
      }
    );
    this.componentRef.changeDetectorRef.markForCheck();
  }

  ngOnDestroy() {
    // defensive here. componentRef should be garbage collected on AppComponent destroy automatically
    // because AppComponent has the life-cycle of the whole application. But we'll destroy the componentRef here in ngOnDestroy
    // to promote best practice and defensive coding
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
