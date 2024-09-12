export type Exercise = {
    id: string;
    name: string;
    quantity: number;
    time: {
        execution: number;
        rest: number;
    }
}
