import { IconProps } from '../../../@types/IconProps'

export function AirPodCase({
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
        d="M2.62 15.75V8.25C2.62 7.48 2.65 6.79 2.73 6.18C3.1 2.89 4.65 2 8.88 2H15.13C19.35 2 20.91 2.89 21.27 6.18C21.36 6.79 21.38 7.48 21.38 8.25V15.75C21.38 16.52 21.35 17.21 21.27 17.83C20.9 21.11 19.35 22 15.12 22H8.88C4.66 22 3.1 21.11 2.74 17.83C2.65 17.21 2.62 16.52 2.62 15.75Z"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.23 8.91998H17.13"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.86953 8.91992H2.76953"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.13 8.92C17.13 10.05 16.21 10.97 15.08 10.97H8.92C8.36 10.97 7.84 10.74 7.47 10.36C7.1 9.99999 6.87 9.49 6.87 8.92C6.87 7.79 7.79 6.87 8.92 6.87H15.07C15.63 6.87 16.15 7.1 16.52 7.48C16.9 7.85 17.13 8.36 17.13 8.92Z"
      />
    </svg>
  )
}
