import React from 'react'
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg'

const SettingSVG = () => {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.0476 0C13.9387 0 14.8048 0.340524 15.4258 0.932387C16.0456 1.52773 16.3878 2.34429 16.3617 3.17243C16.3642 3.35891 16.4302 3.57434 16.5496 3.76314C16.7475 4.07586 17.0599 4.29593 17.4307 4.38627C17.8016 4.47198 18.1899 4.42566 18.5197 4.24381C20.1126 3.39713 22.1399 3.90444 23.0496 5.37542L23.8249 6.62516C23.8448 6.65875 23.8623 6.69118 23.8772 6.72477C24.701 8.17374 24.151 9.99797 22.6203 10.8308C22.3975 10.95 22.217 11.1168 22.0926 11.3184C21.8997 11.6299 21.8462 12.0006 21.9433 12.3411C22.0428 12.6886 22.2805 12.977 22.6153 13.1553C23.3707 13.5596 23.9344 14.2406 24.1597 15.0271C24.3849 15.8124 24.2617 16.6648 23.8224 17.3679L22.9961 18.6489C22.0864 20.1037 20.0591 20.6075 18.4823 19.7597C18.272 19.6473 18.0293 19.5859 17.7879 19.5801H17.7804C17.4208 19.5801 17.0512 19.7226 16.7823 19.9716C16.5098 20.2253 16.3605 20.5635 16.3629 20.9225C16.3542 22.624 14.8671 24 13.0476 24H11.4883C9.66011 24 8.17294 22.6171 8.17294 20.9156C8.17046 20.7059 8.10574 20.4882 7.98503 20.2994C7.78964 19.982 7.47354 19.755 7.1089 19.6647C6.74676 19.5743 6.34976 19.6241 6.02371 19.8002C5.24216 20.2056 4.32248 20.304 3.48121 20.084C2.64118 19.8627 1.91564 19.3253 1.49002 18.613L0.712212 17.3656C-0.197512 15.8969 0.343842 14.0148 1.91937 13.1669C2.36614 12.9272 2.64366 12.4801 2.64366 12.0006C2.64366 11.5211 2.36614 11.0728 1.91937 10.8331C0.342598 9.9806 -0.197512 8.09382 0.710968 6.62516L1.55473 5.33604C2.45201 3.8836 4.48054 3.37165 6.06229 4.21717C6.27758 4.33647 6.51155 4.3967 6.74925 4.39902C7.52456 4.39902 8.17294 3.80368 8.18539 3.07167C8.18041 2.26437 8.52265 1.4895 9.14614 0.90459C9.77212 0.320834 10.6034 0 11.4883 0H13.0476ZM13.0476 1.73737H11.4883C11.1025 1.73737 10.7416 1.87752 10.469 2.13001C10.1977 2.38367 10.0496 2.72072 10.0521 3.07977C10.026 4.77313 8.53883 6.13638 6.73804 6.13638C6.1606 6.13059 5.60431 5.98581 5.12145 5.7171C4.4432 5.35804 3.55712 5.57927 3.16013 6.22209L2.31761 7.51122C1.93181 8.13436 2.16827 8.95787 2.85523 9.32967C3.87447 9.87867 4.5104 10.9026 4.5104 12.0006C4.5104 13.0986 3.87447 14.1213 2.85274 14.6715C2.16951 15.0398 1.93306 15.8587 2.32881 16.4957L3.11408 17.7559C3.30822 18.0814 3.62557 18.3165 3.99269 18.4126C4.35857 18.5076 4.76179 18.4671 5.0978 18.2933C5.59187 18.0235 6.16682 17.8833 6.74427 17.8833C7.02926 17.8833 7.31424 17.9169 7.59301 17.9864C8.43429 18.1972 9.16481 18.7207 9.59789 19.4238C9.87914 19.8651 10.0347 20.3805 10.0397 20.9063C10.0397 21.6592 10.6893 22.2626 11.4883 22.2626H13.0476C13.8429 22.2626 14.4925 21.6627 14.4962 20.9225C14.4912 20.1048 14.8347 19.3276 15.4632 18.7427C16.0829 18.1659 16.9491 17.8196 17.8153 17.8428C18.3828 17.8555 18.9291 17.998 19.4107 18.2528C20.1039 18.6223 20.9887 18.4022 21.3895 17.7652L22.2158 16.483C22.4 16.1876 22.4535 15.817 22.3552 15.4753C22.2581 15.1336 22.0142 14.8371 21.6856 14.6622C20.9165 14.2499 20.3677 13.5851 20.14 12.7882C19.9147 12.0064 20.0379 11.1527 20.4772 10.4497C20.7635 9.98639 21.1829 9.59606 21.6856 9.32735C22.3602 8.96019 22.5966 8.13899 22.2046 7.49964C22.1884 7.47416 22.1735 7.44752 22.161 7.41972L21.4318 6.24294C21.0348 5.60012 20.1512 5.37889 19.458 5.74606C18.7088 6.15839 17.8178 6.27653 16.9615 6.06689C16.1066 5.86072 15.3898 5.35688 14.943 4.64572C14.6568 4.20095 14.5012 3.68322 14.4962 3.15622C14.5074 2.7601 14.3581 2.40452 14.0868 2.14391C13.8167 1.88447 13.4371 1.73737 13.0476 1.73737ZM12.2734 8.07772C14.5969 8.07772 16.4873 9.83825 16.4873 12.0007C16.4873 14.1631 14.5969 15.9214 12.2734 15.9214C9.94995 15.9214 8.05957 14.1631 8.05957 12.0007C8.05957 9.83825 9.94995 8.07772 12.2734 8.07772ZM12.2734 9.81509C10.9792 9.81509 9.92631 10.7961 9.92631 12.0007C9.92631 13.2053 10.9792 14.184 12.2734 14.184C13.5677 14.184 14.6205 13.2053 14.6205 12.0007C14.6205 10.7961 13.5677 9.81509 12.2734 9.81509Z"
        fill="url(#paint0_linear_1289_78355)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1289_78355"
          x1="24.27"
          y1="24"
          x2="-0.120909"
          y2="23.5959"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#E2E57A" />
          <Stop offset="1" stop-color="#7FC08B" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SettingSVG
