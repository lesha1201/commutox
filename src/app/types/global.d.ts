// For CSS-Modules
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.{js,jsx,ts,tsx}' {
  declare global {
    interface Window {
      Element: any;
    }
  }
}
