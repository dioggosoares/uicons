import { IconProps } from '../../../@types/IconProps'

export function AirPlaneSquare({
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
      />
      <path
        className={className}
        stroke={customColors?.inner || strokeIn}
        strokeWidth={selectedWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.85953 19.0002L11.5395 17.5802C11.7895 17.3702 12.2095 17.3702 12.4695 17.5802L14.1395 19.0002C14.5295 19.2002 15.0095 19.0002 15.1495 18.5802L15.4695 17.6202C15.5495 17.3902 15.4695 17.0502 15.2995 16.8802L13.6595 15.2302C13.5395 15.1102 13.4495 14.8802 13.4495 14.7202V12.8702C13.4495 12.4502 13.7595 12.2502 14.1495 12.4102L17.4995 13.8502C18.0495 14.0902 18.5095 13.7902 18.5095 13.1902V12.2602C18.5095 11.7802 18.1495 11.2202 17.6995 11.0302L13.7595 9.33023C13.5895 9.26023 13.4595 9.05023 13.4595 8.87023V6.80023C13.4595 6.12023 12.9595 5.32023 12.3595 5.01023C12.1395 4.90023 11.8895 4.90023 11.6695 5.01023C11.0595 5.31023 10.5695 6.12023 10.5695 6.80023V8.87023C10.5695 9.05023 10.4295 9.26023 10.2695 9.33023L6.32953 11.0302C5.88953 11.2202 5.51953 11.7802 5.51953 12.2602V13.1902C5.51953 13.7902 5.96953 14.0902 6.52953 13.8502L9.87953 12.4102C10.2595 12.2402 10.5795 12.4502 10.5795 12.8702V14.7202C10.5795 14.8902 10.4795 15.1202 10.3695 15.2302L8.69953 16.8702C8.52953 17.0402 8.44953 17.3802 8.52953 17.6102L8.84953 18.5702C8.98953 19.0002 9.45953 19.2002 9.85953 19.0002Z"
      />
    </svg>
  )
}
