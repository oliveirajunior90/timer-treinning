import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Timer from "../timer";
import { Exercise } from "@/types/exercise";

interface ExerciseItemProps {
    exercise: Exercise;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ exercise }) => {
    const [quantity, setQuantity] = useState<number>(exercise.quantity);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [isExecutionComplete, setIsExecutionComplete] = useState<boolean>(false);
    const [resetTime, setResetTime] = useState<boolean>(false);

    const toggleTimer = () => {
        if (quantity > 0) {
            setIsRunning(!isRunning);
        }
    };

    const handleExecutionComplete = () => {
        setIsExecutionComplete(true);
    };

    const handleRestart = () => {
        setQuantity(exercise.quantity);
        setIsExecutionComplete(false)
        setResetTime(true);
        setTimeout(() => {
            setResetTime(false);
            setIsRunning(false);
        }, 100);
    };

    // const handleRestComplete = () => {
    //     if (quantity > 0) {
    //         decrementQuantity();
    //         setResetTime(true);
    //         setTimeout(() => {
    //             setIsExecutionComplete(false);
    //             setResetTime(false);
    //         }, 100);
    //         return;
    //     }
    // };

    const handleRestComplete = () => {
        if (quantity > 0) {
            decrementQuantity();
            if (quantity > 1) {
                setResetTime(true);
                setTimeout(() => {
                    setIsExecutionComplete(false);
                    setResetTime(false);
                }, 100);
            }
        }
    };

    const decrementQuantity = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
    };

    // useEffect(() => {
    //     if (quantity === 0) {
    //         setIsRunning(false);
    //         setIsExecutionComplete(true);
    //     }
    // }, [resetTime, isExecutionComplete]);

    useEffect(() => {
        if (quantity === 0) {
            setIsRunning(false);
            setIsExecutionComplete(true);
        }
    }, [quantity]);

    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
            {quantity > 0 ? <Text style={styles.text}>Quantidade {quantity}</Text> : <Text style={styles.text}>Exercício finalizado</Text>}

            <Timer name="executar" time={exercise.time.execution} isRunning={isRunning && !isExecutionComplete} onComplete={handleExecutionComplete} resetTime={resetTime} />

            <Timer name="descansar" time={exercise.time.rest} isRunning={isRunning && isExecutionComplete} onComplete={handleRestComplete} resetTime={resetTime} />

            <View style={styles.buttonsContainer}>
                <View>
                    <TouchableOpacity style={styles.restart} onPress={handleRestart}>
                        <Text style={styles.restartText}>Reiniciar</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={toggleTimer}>
                    <Icon name={isRunning ? 'pause' : 'play'} size={60} color="#000" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
    },
    exerciseContainer: {
        padding: 20,
        marginBottom: 20,
        borderRadius: 4,
    },
    exerciseTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        marginTop: 40,
    },
    restart: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#d3fc6d',
        borderStyle: 'solid',
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    restartText: {
        color: '#d3fc6d',
        fontSize: 20,
        fontWeight: '200',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 18,
        width: '100%',
        marginBottom: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
    text: {
        fontSize: 22,
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff',
    },
    icon: {
        marginTop: 40,
        color: '#d3fc6d',
    }
});

export default ExerciseItem;
