import React, {ReactNode} from 'react';

type DragAreaProps = {
    children: ReactNode;
    onDropItem: (id: string, x: number, y: number) => void;
  };

  export default function DragArea({children, onDropItem}: DragAreaProps) {

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };
  
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const rawData = event.dataTransfer.getData('application/json'); 
        if (!rawData) {
          console.error(`No data found for item`);
          return;
        }
        try {
            const { id, offsetX, offsetY } = JSON.parse(rawData);
            const dragAreaRect = event.currentTarget.getBoundingClientRect();
            const x = event.clientX - dragAreaRect.left - offsetX;
            const y = event.clientY - dragAreaRect.top - offsetY;
    
            onDropItem(id, x, y);

            console.log(`Dropped Item ${id} at`, { x, y });
      } catch (error) {
        console.error('Failed to parse drag data', error);
      }
    };
  
    return(
        <div className="relative h-screen w-screen"
        onDragOver={handleDragOver}
        onDrop={handleDrop}>
            {children}
        </div>
    )
  }