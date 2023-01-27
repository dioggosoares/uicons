import { IconWeight } from './IconWeight'

export interface IconProps {
  className?: string
  size?: number | string
  fill?: string
  inverted?: boolean
  weight?: IconWeight
  customColors?: {
    outter?: string
    inner?: string
  }
}
