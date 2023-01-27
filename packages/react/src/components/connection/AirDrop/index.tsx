import { IconProps } from '../../../@types/IconProps'

export function AirDrop({
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
        d="M18.0099 17.19C19.7199 15.59 20.7899 13.32 20.7899 10.79C20.7899 5.92998 16.85 2 12 2C7.14995 2 3.20996 5.93998 3.20996 10.79C3.20996 13.33 4.28996 15.62 6.01996 17.22"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.00002 14.55C7.08002 13.57 6.51001 12.25 6.51001 10.79C6.51001 7.75998 8.97002 5.29999 12 5.29999C15.03 5.29999 17.49 7.75998 17.49 10.79C17.49 12.25 16.92 13.56 16 14.55"
      />
      <path
        className={className}
        stroke={customColors?.outter || strokeOut}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.2997 16.6603L8.85973 18.4503C7.71973 19.8803 8.72973 21.9903 10.5597 21.9903H13.4297C15.2597 21.9903 16.2797 19.8703 15.1297 18.4503L13.6897 16.6603C12.8297 15.5703 11.1697 15.5703 10.2997 16.6603Z"
      />
    </svg>
  )
}
