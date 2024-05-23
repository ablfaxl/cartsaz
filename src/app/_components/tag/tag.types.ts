import { ReactNode } from 'react'
import { ComponentBase } from '@/app/_components/_types/component-base.types'

export type TagProps = Omit<ComponentBase, 'size' | 'isDisable'> & {
  title?: string
  children?: ReactNode
}
