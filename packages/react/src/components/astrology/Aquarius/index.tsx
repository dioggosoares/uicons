import { IconProps } from '../../../@types/IconProps'

export function Aquarius({
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
      selectedWeight = '2.5'
      break
    case 'outline':
      strokeIn = inverted ? '#1a1a1a' : '#fff'
      selectedWeight = '1.5'
      break
    case 'fill':
      selectedWeight = '1.5'
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
        d="M12 16C15.87 16 19 12.87 19 9C19 5.13 15.87 2 12 2C8.13 2 5 5.13 5 9"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16V22"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19H9"
      />
    </svg>
  )
}
