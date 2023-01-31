import { IconProps } from '../../../@types/IconProps'

export function ArchiveBlocked({
  size = '1em',
  className,
  fill = 'none',
  inverted = false,
  customColors,
  weight = 'light',
  ...rest
}: IconProps) {
  let selectedWeight = ''
  let strokeOut = 'currentColor'
  let strokeIn = 'currentColor'

  switch (weight) {
    case 'thin':
      selectedWeight = '1'
      break
    case 'light':
      selectedWeight = '1.5'
      break
    case 'regular':
      selectedWeight = '2'
      break
    case 'bold':
      selectedWeight = '3'
      break
    case 'outline':
      strokeIn = inverted ? '#1a1a1a' : '#fff'
      selectedWeight = '1.5'
      break
    case 'fill':
      strokeIn = '#fff'
      fill = 'currentColor'
      selectedWeight = '2'
      break
    default:
      break
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.68 8.70999V19.71C20.68 21.72 19.24 22.57 17.48 21.59L11 17.54"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.32031 19.95V5.86C3.32031 3.74 5.05031 2 7.18031 2H16.8303C18.0403 2 19.1203 2.56 19.8303 3.44"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 2L2 22"
      />
    </svg>
  )
}
