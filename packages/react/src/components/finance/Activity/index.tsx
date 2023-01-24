interface ActivityProps {
  className?: string
  size?: number | string
  fill?: string
  inverted?: boolean
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'outline' | 'fill'
}

export function Activity({
  size = '1em',
  className,
  fill = 'none',
  inverted = false,
  weight = 'light',
  ...rest
}: ActivityProps) {
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
        stroke={strokeOut}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={selectedWeight}
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7z"
      ></path>
      <path
        className={className}
        stroke={strokeIn}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={selectedWeight}
        d="M7.33 14.49l2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98"
      ></path>
    </svg>
  )
}
