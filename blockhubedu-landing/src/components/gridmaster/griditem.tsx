import React, {ReactNode, useState} from 'react';

type GridItemProps = {
    children: ReactNode;
    startX: number;
    startY: number;
    id: string;
  };

export default function GridItem({children, startX, startY, id}: GridItemProps) {

    const [position, setPosition] = useState({x: startX, y: startY});

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const dragData = JSON.stringify({
                id,
                offsetX: event.clientX - rect.left,
                offsetY: event.clientY - rect.top,
            }); event.dataTransfer.setData(`grid-item-${id}`, dragData);
        };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const rawData = event.dataTransfer.getData(`grid-item-${id}`); 
        if (!rawData) {
          console.error(`No data found for item: ${id}`);
          return;
        }
        try {
          const data = JSON.parse(rawData);
          setPosition({
            x: event.clientX - data.offsetX,
            y: event.clientY - data.offsetY,
          });
          console.log(`Dropped item: ${id}`, data);
        } catch (error) {
          console.error(`Failed to parse drag data for item: ${id}`, error);
        }
      };

    return(
        <div className="relative h-screen w-screen"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
        <div className="grid-item absolute cursor-pointer hover:scale-105 hover:shadow-lg transition-transform pointer-events-auto"
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