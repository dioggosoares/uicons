interface Cube3DRotateProps {
  className?: string
  size?: number | string
  fill?: string
}

export function Cube3DRotate({
  size = '1em',
  className,
  fill = 'none',
  ...rest
}: Cube3DRotateProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        className={className}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.701 9.26l5.3 3.07 5.26-3.05M12.002 17.77v-5.45"
      ></path>
      <path
        className={className}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.76 6.29l-3.2 1.78c-.72.4-1.32 1.41-1.32 2.24v3.39c0 .83.59 1.84 1.32 2.24l3.2 1.78c.68.38 1.8.38 2.49 0l3.2-1.78c.72-.4 1.32-1.41 1.32-2.24v-3.4c0-.83-.59-1.84-1.32-2.24l-3.2-1.78c-.69-.38-1.81-.38-2.49.01zM22 15c0 3.87-3.13 7-7 7l1.05-1.75M2 9c0-3.87 3.13-7 7-7L7.95 3.75"
      ></path>
    </svg>
  )
}
