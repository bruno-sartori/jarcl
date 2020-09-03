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
    onClick?: () => void
    type?: string
  }

  export class Button extends React.Component<ButtonProps, any> {}
}
