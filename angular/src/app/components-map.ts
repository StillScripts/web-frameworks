import { Components } from './app.component';
import { BasicVariablesComponent } from './basic-variables/basic-variables.component';
import { ConditionalRenderingComponent } from './conditional-rendering/conditional-rendering.component';
import { DependentVariablesComponent } from './dependent-variables/dependent-variables.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HTMLComponent } from './html/html.component';
import { ListLoopingComponent } from './list-looping/list-looping.component';
import { NestingComponentsComponent } from './nesting-components/nesting-components.component';
import { PropsComponent } from './props/props.component';
import { StylingComponent } from './styling/styling.component';

export const componentsMap = {
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

export type ComponentKeys = keyof typeof componentsMap;
