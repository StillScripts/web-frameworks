export type Framework = "React" | "Solid" | "Svelte" | "Vue" | "Preact" | "Lit"

export const frameworks: Framework[] = [
  "React",
  "Vue",
  "Svelte",
  "Solid",
  "Preact",
  "Lit",
]

export enum Components {
  HelloWorld,
  Styling,
  Props,
  HTML,
  BasicVariables,
  DependentVariables,
  ConditionalRendering,
  ListLooping,
}

// A list of each component based on the enum options above
export const componentsList: Components[] = [
  Components.HelloWorld,
  Components.Styling,
  Components.Props,
  Components.HTML,
  Components.BasicVariables,
  Components.DependentVariables,
  Components.ConditionalRendering,
  Components.ListLooping,
]

/**
 * Method which converts an option of the Components enum into
 * a string to display a title for a component.
 * @param {Components} component
 * @returns {string}
 */
export const getComponentTitle = (component: Components): string => {
  switch (component) {
    case Components.HelloWorld:
      return "Hello World"
    case Components.Styling:
      return "Styling"
    case Components.Props:
      return "Props"
    case Components.HTML:
      return "HTML Tags"
    case Components.BasicVariables:
      return "Basic Variables"
    case Components.DependentVariables:
      return "Dependent Variables"
    case Components.ConditionalRendering:
      return "Conditional Rendering"
    case Components.ListLooping:
      return "List Looping"
    default:
      return "Hello World"
  }
}

/**
 * Method which converts an option of the Components enum into
 * a string of the filename for a component.
 * @param {Components} component
 * @returns {string}
 */
export const getFilename = (component: Components): string => {
  switch (component) {
    case Components.HelloWorld:
      return "HelloWorld"
    case Components.Styling:
      return "Styling"
    case Components.Props:
      return "Props"
    case Components.HTML:
      return "HTML"
    case Components.BasicVariables:
      return "BasicVariables"
    case Components.DependentVariables:
      return "DependentVariables"
    case Components.ConditionalRendering:
      return "ConditionalRendering"
    case Components.ListLooping:
      return "ListLooping"
    default:
      return "HelloWorld"
  }
}

/**
 * Method which gets the file extension of a specific framework.
 * @param {Framework} framework
 * @returns {string}
 */
export const getFileExtension = (framework: Framework): string => {
  switch (framework) {
    case "Lit":
      return ".ts"
    case "Svelte":
      return ".svelte"
    case "Vue":
      return ".vue"
    default:
      return ".jsx"
  }
}

/**
 * Method which gets the path to the logo of a specific file.
 * @param {Framework} framework
 * @returns {string}
 */
export const getLogo = (framework: Framework): string => {
  if (framework === "Preact") {
    return "/logos/preact-logo.png"
  } else {
    return `/logos/${framework.toLowerCase()}-icon.svg`
  }
}
