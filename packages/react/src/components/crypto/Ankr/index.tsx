import { IconProps } from '../../../@types/IconProps'

export function Ankr({
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
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 22V16.4"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        d="M11.9996 16.4001C14.4297 16.4001 16.3996 14.4302 16.3996 12.0001C16.3996 9.57004 14.4297 7.6001 11.9996 7.6001C9.56956 7.6001 7.59961 9.57004 7.59961 12.0001C7.59961 14.4302 9.56956 16.4001 11.9996 16.4001Z"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 9.8V6.4L11.9996 2L20.8996 6.4V9.8"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.09961 14.2002V17.6002L11.9996 22.0002L20.8996 17.6002V14.2002"
      />
    </svg>
  )
}
