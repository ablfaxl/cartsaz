import React, { SVGAttributes } from 'react'
import { SvgIcon } from '@/app/_components/icons/icon-types'

const baseIcon: React.FC<SvgIcon> = ({
  color = 'currentColor',
  widths = 24,
  height = 24,
  strokeWidth = '1.5',
  viewBox = '0 0 24 24',
  children,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widths}
      height={height}
      viewBox={viewBox}
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      {...rest}
    >
      {children}
    </svg>
  )
}

export default baseIcon
