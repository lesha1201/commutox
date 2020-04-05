// For CSS-Modules
declare module '*.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}

declare module '*.{js,jsx,ts,tsx}' {
  declare global {
    interface Window {
      Element: any;
    }
  }
}
