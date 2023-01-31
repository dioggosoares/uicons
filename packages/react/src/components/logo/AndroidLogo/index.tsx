import { IconProps } from '../../../@types/IconProps'

export function AndroidLogo({
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
      strokeIn = inverted ? '#1a1a1a' : 'currentColor'
      selectedWeight = '1.5'
      break
    case 'fill':
      fill = 'currentColor'
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
        d="M11 18V21C11 21.5 10.6 22 10 22C9.4 22 9 21.5 9 21V18H11Z"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 18V21C15 21.5 14.6 22 14 22C13.4 22 13 21.5 13 21V18H15Z"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 11V16C17 17.1 16.1 18 15 18H9C7.9 18 7 17.1 7 16V11C7 9.9 7.9 9 9 9H15C16.1 9 17 9.9 17 11Z"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V15C5 15.6 4.6 16 4 16C3.4 16 3 15.6 3 15V11C3 10.4 3.4 10 4 10C4.6 10 5 10.4 5 11Z"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 11V15C21 15.6 20.6 16 20 16C19.4 16 19 15.6 19 15V11C19 10.4 19.4 10 20 10C20.6 10 21 10.4 21 11Z"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.6 7H14.4C15.3 7 16 6.25 16 5.28571C16 2.92857 14.2 1 12 1C9.8 1 8 2.92857 8 5.28571C8 6.25 8.7 7 9.6 7Z"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 18H11"
      />
    </svg>
  )
}
