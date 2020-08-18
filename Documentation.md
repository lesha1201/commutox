# 📃 Documentation

## Route paths

- `/sign` - Sign page (not-auth)
- `/(chats)` - Chat feed (auth)
- `/settings` - Settings (auth)
- `/chats/{id}` - Certain chat (auth)

## CSS

Some files that follows the rules:

- src\app\shared\ui-kit\Button\button.scss

### CSS Order

https://pyx.space/post/keys-to-maintainable-css-order

- Layout: The position of the element in space. Eg.: position, top, z-index.
- Box: The element itself. Eg.: display, overflow, box-sizing.
- Visual: Design of the element. Eg.: color, border, background.
- Type: Typesetting of the element. Eg.: font-family, text-transform.

```css
.css-order {
  /* Layout */
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-50%, -50%);
  z-index: 10;

  /* Box */
  box-sizing: border-box;
  content: '';
  display: block;
  height: 100vh;
  justify-content: space-between;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;

  /* Visual */
  background: red;
  border: 1px solid red;
  box-shadow: 0 0 0 black;
  color: red;
  cursor: pointer;

  /* Type */
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
}
```

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

#### Comments

1. Comments should be concise. Avoid unnecessary comments.

2. To outline certain areas in code use this syntax `/* -- Area name */`

List of frequently used areas:

```
/* -- Types */

/* -- Utils */

/* -- Main */
```

#### Function Components

Function component should be declared using keyword `function`. Not using type for a function component give us ability to make props that have default value (`defaultProps`) requirable.

Children should be always explicitly defined in an interface. Default type is `React.ReactNode`

#### Class Components

You do not need to explicitly define children in an interface when using default `React.ReactNode` as the children but if a component doesn't suppose to have any children then you should explicitly write it: `children?: never`

(Optional) Class component should be divided in blocks: `🗿 Static properties`, `♻️ Lifecycle`, `🔒 Private methods` (WIP: decide about public methods)

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

#### Imports order

Import should be alphabetized and grouped. First group is third-party libraries. Second is code from the app.

Link to tslint rule: https://palantir.github.io/tslint/rules/ordered-imports/

Example:

```ts
// Import libraries
import Foo from 'foo';
import Bar from 'bar';

// Import source code
import FooBar from 'app/foo-bar';
```

## Testing

### Tests names

Test name for components should be in this syntax: `<ComponentName />`
