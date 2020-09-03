/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

declare module 'jarcl' {
  interface ButtonProps {
    title: string
    bgColor?: string
  }

  export class Button extends React.Component<ButtonProps, any> {}

  interface IThemeProviderComponentRules {
    name: string;
    value: any;
  }

  interface IThemeProviderConfig {
    components: IThemeProviderComponentRules[];
  }

  export function ThemeProviderHoc(props: IThemeProviderConfig): any
}
