import React from 'react'
import classNames from 'classnames'
import { TagProps } from './tag.types'

export const Tag: React.FC<TagProps> = ({
  variant = 'primary',
  className,
  children,
  title,
}) => {
  const classes = classNames('tag', className, {
    [`tag-${variant}`]: variant,
  })

  return (
    <div className={classes}>
      <p className="text-xs font-light">{title}</p>
      {children}
    </div>
  )
}
