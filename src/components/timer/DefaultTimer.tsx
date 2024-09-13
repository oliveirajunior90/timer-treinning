import React, { useEffect, useState } from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {formatTime} from "../../lib/time";
import useTimer from "../../hooks/use-timer";

interface TimerProps {
    name: string;
    time: number;
    isRunning: boolean;
    onComplete?: () => void;
    resetTime?: boolean;
}

const DefaultTimer: React.FC<TimerProps> = ({ name, time, isRunning, onComplete, resetTime = false }) => {
    const timer = useTimer({ time, isRunning, onComplete, resetTime });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.textTimer}>{formatTime(timer)}</Text>
        </View>
    );
};

export default DefaultTimer;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    textTimer: {
        textAlign: 'center',
        fontSize: 50,
        marginBottom: 10,
        color: '#fdfdfd',
        textTransform: 'lowercase',
        fontWeight: '900',
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        marginBottom:0,
        fontWeight: '200',
        color: '#fdfdfd',
        textTransform: 'lowercase'
    },
});


