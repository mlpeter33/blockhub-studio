import { useState } from 'react';

export function useDraggable(id: string, startX: number, startY: number, onPositionChange: (id: string, x: number, y: number) => void) {
    const [position, setPosition] = useState({ x: startX, y: startY });

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        const dragData = JSON.stringify({
            id,
            offsetX,
            offsetY,
        });

        event.dataTransfer.setData('application/json', dragData);
        console.log('Drag Start:', dragData);
    };

    const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        const parentRect = (event.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
        const rawData = event.dataTransfer.getData('application/json');

        if (!rawData) return;

        try{
            const {offsetX, offsetY} = JSON.parse(rawData);
            const newX = event.clientX - parentRect.left - offsetX;
            const newY = event.clientY - parentRect.top - offsetY;

            setPosition({ x: newX, y: newY });
            onPositionChange(id, newX, newY);
        } catch (error) {
            console.error('Failed to parse drag data:', error);
        }
    };
    return { position, handleDragStart, handleDragEnd };
}