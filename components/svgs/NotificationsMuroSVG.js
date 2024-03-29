import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable } from 'react-native'
import { Path, Svg } from 'react-native-svg'

const NotificationsMuroSVG = ({ isNavigation }) => {
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => isNavigation && navigation.navigate(isNavigation)}
    >
      <Svg
        style={{ marginRight: 10 }}
        width="19"
        height="22"
        viewBox="0 0 19 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.00083 12.7871V12.5681C1.03295 11.9202 1.2406 11.2925 1.60236 10.7496C2.2045 10.0975 2.6167 9.29831 2.79571 8.43598C2.79571 7.7695 2.79571 7.0935 2.85393 6.42703C3.15469 3.21842 6.32728 1 9.46106 1H9.53867C12.6725 1 15.845 3.21842 16.1555 6.42703C16.2137 7.0935 16.1555 7.7695 16.204 8.43598C16.3854 9.3003 16.7972 10.1019 17.3974 10.7591C17.7618 11.2972 17.9698 11.9227 17.9989 12.5681V12.7776C18.0206 13.648 17.7208 14.4968 17.1548 15.1674C16.407 15.9515 15.3921 16.4393 14.3024 16.5384C11.107 16.8812 7.88303 16.8812 4.68762 16.5384C3.59914 16.435 2.58576 15.9479 1.83521 15.1674C1.278 14.4963 0.982241 13.6526 1.00083 12.7871Z"
          fill="#7EC18C"
          stroke="#7EC18C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.05518 19.8516C7.55445 20.4782 8.28764 20.8838 9.09247 20.9785C9.8973 21.0732 10.7074 20.8493 11.3435 20.3562C11.5391 20.2103 11.7152 20.0408 11.8674 19.8516"
          stroke="#7EC18C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  )
}

export default NotificationsMuroSVG
