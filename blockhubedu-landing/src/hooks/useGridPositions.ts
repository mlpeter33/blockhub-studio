import { useState } from 'react';

interface Position {
    x: number;
    y: number;
}

interface Positions {
    [key: string]: Position;
}

export default function useGridPositions() {
    const [positions, setPositions] = useState<Positions>({
        item1: { x: 350, y: 100 },
        item2: { x: 850, y: 200 },
        item3: { x: 250, y: 200 },
    });

    const handlePositionChange = (id: string, x: number, y: number) => {
        setPositions((prev) => ({
            ...prev,
            [id]: { x, y },
        }));
    };

    const handleDropItem = (id: string, x: number, y: number) => {
        handlePositionChange(id, x, y);
    };

    return { positions, handlePositionChange, handleDropItem };
}

