import React, {ReactNode} from 'react';

type GridDragItemProps = {  
    children: ReactNode;
    startX: number;
    startY: number;
    id: string;
    onPositionChange: (id: string, x: number, y: number) => void;
  };  

  export default function GridDragItem({children, startX, startY, id, onPositionChange}: GridDragItemProps) {

   // const [position, setPosition] = useState({x: startX, y: startY});

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {

        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        const dragData = JSON.stringify({
           id,
           offsetX,
           offsetY,
        });

    event.dataTransfer.setData("application/json", dragData);
    console.log("Drag Start:", dragData);
  };

    const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {

        const parentRect = (event.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
        const rawData = event.dataTransfer.getData("application/json");

        if (!rawData) return;
    
        try {
        const { offsetX, offsetY } = JSON.parse(rawData); 
        const newX = event.clientX - parentRect.left - offsetX;
        const newY = event.clientY - parentRect.top - offsetY;
    
      //  setPosition({ x: newX, y: newY });
        onPositionChange(id, newX, newY);
      }catch (error) {
        console.error("Failed to parse drag data:", error);
      } 
    };

    return(
        <div className="grid-item absolute cursor-pointer hover:scale-105 hover:shadow-lg transition-transform pointer-events-auto"
        style={{left: startX, top: startY}}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 text-center">{children}
                        </div>
                    </div>
                </div> 
    )
}