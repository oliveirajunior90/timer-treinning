import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {formatTime} from '@lib/time.ts';
import useTimer from '@hooks/use-timer';
import colors from '@styles/colors';

interface TimerProps {
  time: number;
  isRunning: boolean;
  onComplete?: () => void;
  resetTime?: boolean;
}

const TotalTimer: React.FC<TimerProps> = ({
  time,
  isRunning,
  onComplete,
  resetTime = false,
}) => {
  const timer = useTimer({time, isRunning, onComplete, resetTime});

  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>{formatTime(timer)}</Text>
    </View>
  );
};

export default TotalTimer;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  textTimer: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    textTransform: 'lowercase',
    fontWeight: '900',
    color: colors.primary,
  },
});
