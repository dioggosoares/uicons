import { IconProps } from '../../../@types/IconProps'

export function AirPlane({
  size = '1em',
  className,
  fill = 'none',
  inverted = false,
  customColors,
  weight = 'light',
  ...rest
}: IconProps) {
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
      selectedWeight = '2.5'
      break
    case 'outline':
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
        stroke={stroke}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.02999 21.69L11.36 19.73C11.71 19.43 12.29 19.43 12.64 19.73L14.97 21.69C15.51 21.96 16.17 21.69 16.37 21.11L16.81 19.78C16.92 19.46 16.81 18.99 16.57 18.75L14.3 16.47C14.13 16.31 14 15.99 14 15.76V12.91C14 12.49 14.31 12.29 14.7 12.45L19.61 14.57C20.38 14.9 21.01 14.49 21.01 13.65V12.36C21.01 11.69 20.51 10.92 19.89 10.66L14.3 8.25001C14.14 8.18001 14 7.97001 14 7.79001V4.79001C14 3.85001 13.31 2.74001 12.47 2.31001C12.17 2.16001 11.82 2.16001 11.52 2.31001C10.68 2.74001 9.98999 3.86001 9.98999 4.80001V7.80001C9.98999 7.98001 9.84999 8.19001 9.68999 8.26001L4.10999 10.67C3.48999 10.92 2.98999 11.69 2.98999 12.36V13.65C2.98999 14.49 3.61999 14.9 4.38999 14.57L9.29999 12.45C9.67999 12.28 9.99999 12.49 9.99999 12.91V15.76C9.99999 15.99 9.86999 16.31 9.70999 16.47L7.43999 18.75C7.19999 18.99 7.08999 19.45 7.19999 19.78L7.63999 21.11C7.81999 21.69 8.47999 21.97 9.02999 21.69Z"
      />
    </svg>
  )
}
