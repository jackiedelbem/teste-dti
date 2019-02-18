import React from 'react'
import './button.scss'
import classNames from 'classnames'

const Button = ({
  children,
  onClick,
  disabled,
  className,
  light,
  block,
  fixed,
  blue,
  success,
  white,
  gray,
  outlineGreen,
  outlineGray,
  outlineBlue,
  small,
  large,
  veryLarge,
  full,
  noBorder,
  noFill,
}) => (
  <div
    className={classNames(
      'component__button',
      {
        'component__button--fixed': fixed,
        'component__button--small': small,
        'component__button--large': large,
        'component__button--very-large': veryLarge,
        'component__button--full': full,
        'component__button--success': success,
        'component__button--blue': blue,
        'component__button--white': white,
        'component__button--gray': gray,
        'component__button--block': block,
        'component__button--light': light,
        'component__button--outline-green': outlineGreen,
        'component__button--outline-gray': outlineGray,
        'component__button--outline-blue': outlineBlue,
        'component__button--no-border': noBorder,
        'component__button--no-fill': noFill,
      },
      className
    )}
    onClick={onClick}>
    {children}
  </div>
)

export default Button
