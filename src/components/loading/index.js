import React from 'react'
import './loading.scss'
import classNames from 'classnames'
import LoadingIcon from 'mdi-react/LoadingIcon'

const Loading = ({children, className, loading}) => (
  <div className={classNames('component__loading', {'component__loading--loading': loading}, className)}>
    <div className={classNames('component__loading__box', {'component__loading__box--loading': loading}, className)}>
      <LoadingIcon className="component__loading__icon" />
      {children || 'Carregando...'}
    </div>
  </div>
)

export default Loading
