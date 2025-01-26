import React, {ReactNode, useState} from 'react';

type GridItemProps = {
    children: ReactNode;
    startX: number;
    startY: number;
  };

export default function GridItem({children, startX, startY}: GridItemProps) {

    const [position, setPosition] = useState({x: startX, y: startY});

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.dataTransfer.setData(
            "text/plain",
            JSON.stringify({
                offsetX: event.clientX - rect.left,
                offsetY: event.clientY - rect.top,
            })
            );
        };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const data = JSON.parse(event.dataTransfer.getData("text/plain"));
        setPosition({
            x: event.clientX - data.offsetX,
            y: event.clientY - data.offsetY,
        });
    };
    return(
        <div className="relative w-screen h-screen flex justify-center items-center"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <div className="grid-item absolute cursor-pointer"
        style={{left: position.x, top: position.y}}
        draggable="true"
        onDragStart={handleDragStart}>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 text-center">{children}
                        </div>
                    </div>
                </div> 
            </div>
    )
}