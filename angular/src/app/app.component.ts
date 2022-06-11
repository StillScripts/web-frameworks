import { DOCUMENT } from '@angular/common';
import {
  Component,
  ComponentRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ComponentKeys, componentsMap } from './components-map';
// An enum containing an option for each component example
export enum Components {
  HelloWorld,
  Styling,
  NestingComponents,
  Props,
  HTML,
  BasicVariables,
  DependentVariables,
  ConditionalRendering,
  ListLooping,
  //TypingAnimation, to be done...
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private componentRef?: ComponentRef<unknown>;
  private componentsList: Components[]; 
  private menuOpen: boolean;

  @ViewChild('anchor', { static: true, read: ViewContainerRef })
  anchor!: ViewContainerRef;

  // We inject DOCUMENT here so we do not rely solely on DOM object
  // This is useful for SSR and for Testing (because we can inject a mock document object)
  constructor(@Inject(DOCUMENT) private document: Document) {
    // Create a list of each component based on the enum options above
    this.componentsList = [
      Components.HelloWorld,
      Components.Styling,
      Components.NestingComponents,
      Components.Props,
      Components.HTML,
      Components.BasicVariables,
      Components.DependentVariables,
      Components.ConditionalRendering,
      Components.ListLooping,
    ];
    this.menuOpen = false;
  }

  ngOnInit() {
    this.componentRef = this.anchor.createComponent(componentsMap.HelloWorld());
    this.componentRef.changeDetectorRef.markForCheck();
  }

  handleSwitch(newComponent: ComponentKeys) {
    const componentFactory = componentsMap[newComponent];
    const component = componentFactory();

    // we only mount a new component on the anchor if it's different
    if (this.componentRef && this.componentRef.componentType !== component) {
      const html = this.document.createElement("strong");
      html.innerHTML = "HTML!!!";
      this.componentRef.destroy();

      this.componentRef = this.anchor.createComponent(
        component,
        // For dynamic approach, this is needed
        {
          projectableNodes:
            newComponent === 'HTML'
              ? [[html]]
              : [],
        }
      );
      this.componentRef.changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy() {
    // defensive here. componentRef should be garbage collected on AppComponent destroy automatically
    // because AppComponent has the life-cycle of the whole application. But we'll destroy the componentRef here in ngOnDestroy
    // to promote best practice and defensive coding
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  
/**
 * Method which converts an option of the Components enum into
 * a string to display a title for a component.
 * @param {Components} component
 * @returns {string}
 */
getComponentTitle(component: Components): string {
  switch (component) {
    case Components.HelloWorld:
      return "Hello World";
    case Components.Styling:
      return "Styling";
    case Components.NestingComponents:
      return "Nesting Components";
    case Components.Props:
      return "Passing Props";
    case Components.HTML:
      return "HTML Tags";
    case Components.BasicVariables:
      return "Basic Variables";
    case Components.DependentVariables:
      return "Dependent Variables";
    case Components.ConditionalRendering:
      return "Conditional Rendering";
    case Components.ListLooping:
      return "List Looping";
    }
  };

  /**
   * Method which returns a key from the componentsMap using an enum option.
   * @param {Components} component - The enum option representing the component 
   * @returns {ComponentKeys}
   */
  getComponentKey(component:Components): ComponentKeys {
    switch (component) {
      case Components.HelloWorld:
        return "HelloWorld";
      case Components.Styling:
        return "Styling";
      case Components.NestingComponents:
        return "NestingComponents";
      case Components.Props:
        return "Props";
      case Components.HTML:
        return "HTML";
      case Components.BasicVariables:
        return "BasicVariables";
      case Components.DependentVariables:
        return "DependentVariables";
      case Components.ConditionalRendering:
        return "ConditionalRendering";
      case Components.ListLooping:
        return "ListLooping";
      default:
        return "HelloWorld";
    } 
  }

  /**
   * Enable public access for the components list
   * @returns {Components[]}
   */
   getComponentsList(): Components[] {
    return this.componentsList;
  }

  /**
   * Enable public access for the menuOpen variable
   * @returns {boolean}
   */
  getMenuOpen(): boolean {
    return this.menuOpen;
  }

  setMenuOpen(open: boolean) {
    this.menuOpen = open;
  }

  getLinksClass() {
    if (this.menuOpen) {
      return "links open-links" 
    }
    else {
      return "links";
    }
  }

  getComponentsClass() {
    if (this.menuOpen) return "components components-close"
    else return "components"
  }
}
