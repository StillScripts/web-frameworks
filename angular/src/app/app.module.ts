import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicVariablesComponent } from './basic-variables/basic-variables.component';
import { ConditionalRenderingComponent } from './conditional-rendering/conditional-rendering.component';
import {
  ChangingValuesComponent,
  MultiplyPipe,
} from './dependent-variables/changing-values/changing-values.component';
import { DependentVariablesComponent } from './dependent-variables/dependent-variables.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HTMLComponent } from './html/html.component';
import { ListLoopingComponent } from './list-looping/list-looping.component';
import { NestedComponentComponent } from './nesting-components/nested-component/nested-component.component';
import { NestingComponentsComponent } from './nesting-components/nesting-components.component';
import { NestedComponent } from './props/nested/nested.component';
import { PropsComponent } from './props/props.component';
import { StylingComponent } from './styling/styling.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicVariablesComponent,
    ConditionalRenderingComponent,
    DependentVariablesComponent,
    HelloWorldComponent,
    HTMLComponent,
    ListLoopingComponent,
    NestingComponentsComponent,
    PropsComponent,
    StylingComponent,
    NestedComponent,
    NestedComponentComponent,
    ChangingValuesComponent,
    MultiplyPipe,
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
