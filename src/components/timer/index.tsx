import React, { useEffect, useState } from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {formatTime} from "../../lib/time";

interface TimerProps {
    name: string;
    time: number;
    isRunning: boolean;
    onComplete?: () => void;
    resetTime?: boolean;
}

const Timer: React.FC<TimerProps> = ({ name, time, isRunning, onComplete, resetTime = false }) => {
    const [timer, setTimer] = useState<number>(time);

    useEffect(() => {
        console.log('furfles', resetTime ? 'true' : 'false');
        if (resetTime) {
            // console.log(`${name} ${time} ${resetTime}`)
            setTimer(time);
        }
    }, [resetTime]);
    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval!);
                        if (onComplete) {
                            setTimeout(onComplete, 0);
                        }
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else if (!isRunning && timer !== 0) {
            clearInterval(interval!);
        }

        return () => clearInterval(interval!);
    }, [isRunning]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.textTimer}>{formatTime(timer)}</Text>
        </View>
    );
};

export default Timer;

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


