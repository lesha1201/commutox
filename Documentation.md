# 📃 Documentation

## Route paths

- `/(messages)` - Chat feed
- `/settings` - Settings
- `/messages/{id}` - Certain chat

## CSS

Some files that follows the rules:

- src\app\shared\ui-kit\Button\button.scss

### CSS Modules

#### Naming

Use class names that describe a component. When following this rule use composition in order to avoid much repeating properties.

Example

```scss
/* Bad */
.btn {
  // {...properties}

  &.outlined {
    // {...properties}
  }
}

/* Good */
.common {
  // {component's common properties}
}

.outlined {
  composes: common; // Composition -> <tag class="outlined common" />
  // {...properties}
}
```

## JavaScript/TypeScript

Some files that follows the rules:

- src\app\shared\ui-kit\Button\index.tsx (FC)
- src\app\shared\ui-kit\Input\index.tsx (Class)

### Rules

#### Function Components

Function component should be declared using keyword `function`. Not using type for a function component give us ability to make props that have default value (`defaultProps`) requirable.

Children should be always explicitly defined in an interface. Default type is `React.ReactNode`

#### Class Components

You do not need to explicitly define children in an interface when using default `React.ReactNode` as the children but if a component doesn't suppose to have any children then you should explicitly write it: `children?: never`

Class component should be divided in blocks: `🗿 Static properties`, `♻️ Lifecycle`, `🔒 Private methods` (WIP: decide about public methods)

Example:

```tsx
class Component extends React.Component<IProps, IState> {
  /* 🗿 Static properties ------------*/
  static defaultProps = {};
  /* End of Static properties -------*/

  /* ♻️ Lifecycle -------------------*/
  render() {}
  /* End of Lifecycle ---------------*/

  /* 🔒 Private methods -------------*/
  private privateMethod() {}
  /* End of Private methods ---------*/
}
```

## Testing

### Tests names

Test name for components should be in this syntax: `<ComponentName />`
