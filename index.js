import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const daysInMonth = 31;
  const firstDayOfMonth = new Date(2022, 0, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.

  const renderCalendar = () => {
    const calendar = [];
    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<Text key={`${i}-${j}`} style={styles.day}></Text>);
        } else if (day > daysInMonth) {
          break;
        } else {
          const dayStyle = [styles.day];
          if (day === 1 || day === 11 || day === 23) {
            dayStyle.push(styles.red);
          }
          week.push(<Text key={`${i}-${j}`} style={dayStyle}>{day}</Text>);
          day++;
        }
      }
      calendar.push(<View key={i} style={styles.week}>{week}</View>);
      if (day > daysInMonth) {
        break;
      }
    }
    return calendar;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.month}>January</Text>
      <View style={styles.weekdays}>
        <Text style={styles.weekday}>Sun</Text>
        <Text style={styles.weekday}>Mon</Text>
        <Text style={styles.weekday}>Tue</Text>
        <Text style={styles.weekday}>Wed</Text>
        <Text style={styles.weekday}>Thu</Text>
        <Text style={styles.weekday}>Fri</Text>
        <Text style={styles.weekday}>Sat</Text>
      </View>
      {renderCalendar()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  month: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  weekdays: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  weekday: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  week: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  day: {
    flex: 1,
    textAlign: 'center',
  },
  red: {
    color: 'red',
  },
});
