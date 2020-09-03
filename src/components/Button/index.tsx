import React, { Component } from 'react'
import './index.scss'

declare interface IButtonProps {
  title: string
  bgColor?: string
  onClick?: () => void
  type?: string
}

/**
 * Componente de botao
 */
class Button extends Component<IButtonProps> {
  render() {
    const { title, onClick, type = 'default' } = this.props

    const customClass = `jarcl-button--${type}`

    return (
      <button
        className={`jarcl-button ${customClass}`}
        onClick={onClick}
      >
        {title}
      </button>
    )
  }
}

export default Button
