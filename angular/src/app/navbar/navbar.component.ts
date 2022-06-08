import { DOCUMENT } from '@angular/common';
import { Component, ComponentRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentKeys, componentsMap } from '../components-map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
    const componentFactory = componentsMap[newComponent];
    const component = componentFactory();

    // we only mount a new component on the anchor if it's different
    if (this.componentRef && this.componentRef.componentType !== component) {
      this.componentRef.destroy();

      this.componentRef = this.anchor.createComponent(
        component,
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
