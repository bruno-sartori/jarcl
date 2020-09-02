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
    const { title } = this.props

    return <div className='jarcl-Card'>{title}</div>
  }
}

export default Card
