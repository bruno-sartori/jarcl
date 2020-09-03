import React, { Component } from 'react'
import './index.scss'

declare interface ButtonProps {
  title: string
  bgColor?: string
}

/**
 * Componente de botao
 */
class Button extends Component<ButtonProps> {
  render() {
    const { title, bgColor = undefined } = this.props

    const customStyle = bgColor ? { backgroundColor: bgColor } : {}

    return <button className='jarcl-button' style={customStyle}>{title}</button>
  }
}

export default Button
