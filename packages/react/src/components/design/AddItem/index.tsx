interface AddItemProps {
  className?: string
  size?: number | string
  fill?: string
  inverted?: boolean
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'outline' | 'fill'
}

export function AddItem({
  size = '1em',
  className,
  fill = 'none',
  inverted = false,
  weight = 'light',
  ...rest
}: AddItemProps) {
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
      viewBox="0 0 24 24"
      {...rest}
    >
      <g clipPath="url(#clip0_5_19757)">
        <path
          className={className}
          stroke={strokeOut}
          strokeWidth={selectedWeight}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
        />
        <path
          fill={fill}
          className={className}
          stroke={strokeOut}
          strokeWidth={selectedWeight}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
        />
        <path
          className={className}
          stroke={strokeIn}
          strokeWidth={selectedWeight}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.87 15H18.13"
        />
        <path
          className={className}
          stroke={strokeIn}
          strokeWidth={selectedWeight}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 16.63V13.37"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_19757">
          <rect width={size} height={size} fill="none" />
        </clipPath>
      </defs>
    </svg>
  )
}
