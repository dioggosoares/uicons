interface Cube3DScanProps {
  className?: string
  size?: number | string
  fill?: string
  inverted?: boolean
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'outline' | 'fill'
}

export function Cube3DScan({
  size = '1em',
  className,
  fill = 'none',
  inverted = false,
  weight = 'light',
  ...rest
}: Cube3DScanProps) {
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
        stroke={strokeOut}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={selectedWeight}
        d="M2 9V7c0-3 2-5 5-5h10c3 0 5 2 5 5v2M2 15v2c0 3 2 5 5 5h10c3 0 5-2 5-5v-2"
      ></path>
      <path
        className={className}
        stroke={strokeIn}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={selectedWeight}
        d="M6.7 9.26l5.3 3.07 5.26-3.05M12 17.77v-5.45"
      ></path>
      <path
        className={className}
        stroke={strokeIn}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={selectedWeight}
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.39c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.39-1.81-.39-2.49 0z"
      ></path>
    </svg>
  )
}
