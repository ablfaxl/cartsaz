import React from 'react'
import classNames from 'classnames'
import { AlertProps } from './alert.types'

export const Alert: React.FC<AlertProps> = ({
  variant = 'primary',
  className,
  children,
  title,
}) => {
  const classes = classNames('alert', className, {
    [`alert-${variant}`]: variant,
  })

  return (
    <div className={classes}>
      <p className="text-base font-medium">{title}</p>
      {children}
    </div>
  )
}
