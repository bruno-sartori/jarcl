import React, { Component } from 'react'
import './index.scss'

export interface ButtonProps {
  title: string
}

/**
 * Componente de botao
 */
class Button extends Component<ButtonProps> {
  render() {
    const { title } = this.props

    return <button className='jarcl-button'>{title}</button>
  }
}

export default Button
