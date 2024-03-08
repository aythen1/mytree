import React from 'react'
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg'

const CalendarSVG = ({ color }) => {
  return (
    <Svg
      style={{ marginRight: 10 }}
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2466 0C17.7561 0 18.1696 0.375068 18.1696 0.837205L18.1702 1.78359C19.9673 1.89534 21.4598 2.45362 22.5161 3.41368C23.6693 4.46409 24.2761 5.97441 24.27 7.78612V17.9699C24.27 21.6893 21.6656 24 17.4749 24H7.06507C2.87432 24 0.27002 21.6569 0.27002 17.8851V7.78389C0.27002 4.27566 2.59254 2.02374 6.38038 1.78398L6.38113 0.837205C6.38113 0.375068 6.79467 0 7.30421 0C7.81374 0 8.22728 0.375068 8.22728 0.837205L8.22691 1.7626H16.3229L16.3235 0.837205C16.3235 0.375068 16.737 0 17.2466 0ZM22.4238 9.9393H2.11617V17.8851C2.11617 20.7494 3.8737 22.3256 7.06507 22.3256H17.4749C20.6662 22.3256 22.4238 20.7784 22.4238 17.9699L22.4238 9.9393ZM17.7484 16.9632C18.2579 16.9632 18.6714 17.3383 18.6714 17.8004C18.6714 18.2626 18.2579 18.6376 17.7484 18.6376C17.2388 18.6376 16.8204 18.2626 16.8204 17.8004C16.8204 17.3383 17.2277 16.9632 17.7373 16.9632H17.7484ZM12.2868 16.9632C12.7964 16.9632 13.2099 17.3383 13.2099 17.8004C13.2099 18.2626 12.7964 18.6376 12.2868 18.6376C11.7773 18.6376 11.3588 18.2626 11.3588 17.8004C11.3588 17.3383 11.7662 16.9632 12.2758 16.9632H12.2868ZM6.81387 16.9632C7.32341 16.9632 7.73694 17.3383 7.73694 17.8004C7.73694 18.2626 7.32341 18.6376 6.81387 18.6376C6.30433 18.6376 5.88464 18.2626 5.88464 17.8004C5.88464 17.3383 6.29326 16.9632 6.80279 16.9632H6.81387ZM17.7484 12.6246C18.2579 12.6246 18.6714 12.9997 18.6714 13.4618C18.6714 13.924 18.2579 14.299 17.7484 14.299C17.2388 14.299 16.8204 13.924 16.8204 13.4618C16.8204 12.9997 17.2277 12.6246 17.7373 12.6246H17.7484ZM12.2868 12.6246C12.7964 12.6246 13.2099 12.9997 13.2099 13.4618C13.2099 13.924 12.7964 14.299 12.2868 14.299C11.7773 14.299 11.3588 13.924 11.3588 13.4618C11.3588 12.9997 11.7662 12.6246 12.2758 12.6246H12.2868ZM6.81387 12.6246C7.32341 12.6246 7.73694 12.9997 7.73694 13.4618C7.73694 13.924 7.32341 14.299 6.81387 14.299C6.30433 14.299 5.88464 13.924 5.88464 13.4618C5.88464 12.9997 6.29326 12.6246 6.80279 12.6246H6.81387ZM16.3229 3.43701H8.22691L8.22728 4.51086C8.22728 4.973 7.81374 5.34807 7.30421 5.34807C6.79467 5.34807 6.38113 4.973 6.38113 4.51086L6.38048 3.46235C3.62328 3.67242 2.11617 5.18828 2.11617 7.78389V8.26489H22.4238L22.4238 7.78389C22.4287 6.40529 22.0201 5.33367 21.209 4.59693C20.497 3.94927 19.4562 3.56248 18.1707 3.46288L18.1696 4.51086C18.1696 4.973 17.7561 5.34807 17.2466 5.34807C16.737 5.34807 16.3235 4.973 16.3235 4.51086L16.3229 3.43701Z"
        fill={color ? color : 'url(#paint0_linear_1289_78353)'}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1289_78353"
          x1="24.27"
          y1="24"
          x2="-0.120909"
          y2="23.5959"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E2E57A" />
          <Stop offset="1" stopColor="#7FC08B" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default CalendarSVG
