import { useEffect, useState } from "react";

interface UseTimerProps {
    time: number;
    isRunning: boolean;
    onComplete?: () => void;
    resetTime?: boolean;
}

const useTimer = ({ time, isRunning, onComplete, resetTime = false }: UseTimerProps) => {
    const [timer, setTimer] = useState<number>(time);

    useEffect(() => {
        if (resetTime) {
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

    return timer;
};

export default useTimer;
