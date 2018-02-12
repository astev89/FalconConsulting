import React from 'react'
import classNames from 'classnames'

import './_primary-button.scss'

export default function PrimaryButton({onClick, className, text, disabled}) {
  return (
    <button
      className={classNames('btn', {className})}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}