import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Calendar } from 'react-native-calendars'

const Calendario = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDayPress = (day) => {
    if (selectedDate === day.dateString) {
      setSelectedDate(null)
    } else {
      setSelectedDate(day.dateString)
    }
  }

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markingType="custom"
        markedDates={{
          [selectedDate]: {
            selected: true,
            customStyles: {
              container: {
                backgroundColor: '#DFE271',
                width: 32,
                height: 32,
                borderRadius: 0
              },
              text: {
                color: 'white'
              }
            }
          }
        }}
        theme={{
          todayTextColor: 'black'
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Calendario
