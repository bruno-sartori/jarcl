import React, { Component } from 'react'

declare interface IThemeProviderComponentRules {
  name: string;
  value: any;
}

declare interface IThemeProviderConfig {
  components: IThemeProviderComponentRules[];
}

const ThemeProviderHoc = (config: IThemeProviderConfig) => (WrappedComponent: any): any => {
  return class WithDataAdapter extends Component {
    private config = config

    componentDidMount() {
      for (let i = 0; i < config.components.length; i++) {
        document.documentElement.style.setProperty(this.config[i].name, this.config[i].name)
      }
    }

    render() {
      return <WrappedComponent />
    }
  }
}

export default ThemeProviderHoc
