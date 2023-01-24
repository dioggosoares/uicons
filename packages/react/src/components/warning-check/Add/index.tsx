interface AddProps {
  className?: string
  size?: number | string
  fill?: string
  inverted?: boolean
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'outline' | 'fill'
}

export function Add({
  size = '1em',
  className,
  fill = 'none',
  inverted = false,
  weight = 'light',
  ...rest
}: AddProps) {
  let selectedWeight = ''
  let stroke = 'currentColor'

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
      stroke = inverted ? '#1a1a1a' : 'currentColor'
      selectedWeight = '1.5'
      break
    case 'fill':
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
        stroke={stroke}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12h12M12 18V6"
      ></path>
    </svg>
  )
}
