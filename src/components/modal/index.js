import React from 'react'
import './modal.scss'
import classNames from 'classnames'
import CloseIcon from 'mdi-react/CloseIcon'
import Button from '../button'

const Modal = ({full, title, description, confirm, children, show, onClose, noCloseButton}) => (
  <div className={classNames('component__modal', {'component__modal--hidden': !show})}>
    <div
      className={classNames('component__modal__window', {
        'component__modal__window--full': full,
        'component__modal__window--hidden': !show,
      })}>
      <CloseIcon
        className={classNames('component__modal__close-icon', {'component__modal__close-icon--hidden': noCloseButton})}
        onClick={onClose}
      />
      {title && <div className="component__modal__title">{title}</div>}
      {description && <div className="component__modal__description">{description}</div>}
      <div
        className={classNames('component__modal__window__children', {
          'component__modal__window__children--full': full,
        })}>
        {children}
      </div>
      {confirm && (
        <Button success className="component__modal__button-confirm" onClick={onClose}>
          {confirm}
        </Button>
      )}
    </div>
  </div>
)

export default Modal
