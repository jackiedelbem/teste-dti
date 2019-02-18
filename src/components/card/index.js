import React from 'react'
import './card.scss'
import classNames from 'classnames'

const Card = ({ children, className }) => (
  <div
    className={classNames('component__card', className)}>
    {children}
  </div>
)

export default Card
