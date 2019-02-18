import React from 'react'
import './card-header.scss'
import classNames from 'classnames'
import IconHeader from '../../assets/images/dti_img.png'

const HeaderSvg = () => <img src={IconHeader} style={{width: '42px'}} />

const CardHeader = ({Icon, children, className, big, logo, vertical}) => (
  <div
    className={classNames(
      {'component__card-header--big': big},
      {'component__card-header--vertical': vertical},
      'component__card-header',
      className
    )}>
    {Icon && <Icon className="component__card-header__icon" />}

    {children}

    {logo && (
      <div className={classNames('component__card-header__logo', {'component__card-header__logo--vertical': vertical})}>
        <HeaderSvg />
      </div>
    )}
  </div>
)

export default CardHeader
