import React, { Component } from 'react'
import './index.module.scss'

interface ButtonProps {
  title: string
}

class Button extends Component<ButtonProps> {
  render() {
    const { title } = this.props

    return <button className='jarcl-button'>{title}</button>
  }
}

export default Button
