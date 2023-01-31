import { IconProps } from '../../../@types/IconProps'

export function AppleLogo({
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
      selectedWeight = '3'
      break
    case 'outline':
      stroke = inverted ? '#1a1a1a' : 'currentColor'
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
        stroke={customColors?.outter || stroke}
        strokeWidth={selectedWeight}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4005 2C15.6005 3.1 15.1005 4.2 14.5005 5C13.9005 5.8 12.8005 6.5 11.7005 6.4C11.5005 5.3 12.0005 4.3 12.6005 3.5C13.3005 2.7 14.4005 2.1 15.4005 2ZM18.6005 19.4C19.1005 18.6 19.4005 18.1 19.8005 17.2C16.7005 16 16.2005 11.6 19.3005 10C18.4005 8.8 17.1005 8.2 15.8005 8.2C14.9005 8.2 14.3005 8.4 13.7005 8.6C13.2005 8.8 12.8005 8.9 12.3005 8.9C11.7005 8.9 11.3005 8.7 10.7005 8.5C10.1005 8.3 9.50053 8.1 8.80053 8.1C7.40053 8.1 5.90053 8.9 5.00053 10.4C3.70053 12.4 3.90053 16.3 6.00053 19.5C6.90053 20.7 7.90053 22 9.20053 22C9.80053 22 10.1005 21.8 10.5005 21.7C11.0005 21.5 11.5005 21.3 12.3005 21.3C13.2005 21.3 13.6005 21.5 14.1005 21.7C14.5005 21.9 14.8005 22 15.4005 22C16.8005 22 17.8005 20.5 18.6005 19.4Z"
      />
    </svg>
  )
}
