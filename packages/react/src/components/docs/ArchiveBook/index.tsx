import { IconProps } from '../../../@types/IconProps'

export function ArchiveDocs({
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
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 2V9.85999C15.5 10.3 14.98 10.52 14.66 10.23L12.34 8.09003C12.15 7.91003 11.85 7.91003 11.66 8.09003L9.34003 10.23C9.02003 10.52 8.5 10.3 8.5 9.85999V2H15.5Z"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.25 14H17.5"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 18H17.5"
      />
    </svg>
  )
}
