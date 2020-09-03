import React, { Component } from 'react'
import './index.scss'

export interface CardProps {
  title: string
}

/**
 * Componente de botao
 */
class Card extends Component<CardProps> {
  render() {
    const { title, children } = this.props

    return (
      <div className='jarcl-card'>
        <div className='jarcl-card--title'>{title}</div>
        <div className='jarcl-card--content'>{children}</div>
      </div>
    )
  }
}

export default Card
