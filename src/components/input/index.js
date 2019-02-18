import React from 'react'
import './input.scss'
import classNames from 'classnames'

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {focus: false}
  }

  toggleFocus = focused => {
    this.setState({
      focus: focused && !this.props.readOnly,
    })

    focused && !this.props.readOnly && this.input.focus()
  }

  render() {
    let {
      className,
      wide,
      label,
      name,
      value,
      readOnly,
      onChange,
      onBlur = () => {},
      onFocus = () => {},
      type,
      step,
      min,
      max,
      fileName,
      error,
      accept
    } = this.props
    return (
      <div className={classNames('component__input', className)}>
        <div
          onClick={() => !this.state.focus && this.toggleFocus(true)}
          className={classNames('component__input__label', {
            'component__input__label--focused': this.state.focus,
            'component__input__label--active': this.state.focus || value || (type === 'file' && fileName),
            'component__input__label--error': !this.state.focus && error,
          })}>
          {label}
        </div>
        {type && type === 'file' && fileName && <div className="component__input__label">{fileName}</div>}
        <input
          readOnly={readOnly}
          ref={ref => (this.input = ref)}
          onFocus={() => this.toggleFocus(true)}
          onBlur={event => {
            this.toggleFocus(false)
            onBlur(event)
          }}
          className={classNames('component__input__input')}
          value={value}
          type={type || 'text'}
          name={name}
          onChange={onChange}
          accept={accept}
          step={step}
          min={min}
          max={max}
        />
        <div className={classNames('component__input__border', {'component__input__border--error': error})} />
        <div
          className={classNames(
            {'component__input__highlight--focused': this.state.focus},
            'component__input__highlight'
          )}
        />
        <div className={classNames('component__input__error')}>{error}</div>
      </div>
    )
  }
}
export default Input
