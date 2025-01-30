import React, {ReactNode} from 'react';
import { useDraggable } from '@/hooks/useDraggable';

type GridDragItemProps = {  
    children: ReactNode;
    startX: number;
    startY: number;
    id: string;
    onPositionChange: (id: string, x: number, y: number) => void;
  };  

  export default function GridDragItem({children, startX, startY, id, onPositionChange}: GridDragItemProps) {

    const { position, handleDragStart, handleDragEnd } = useDraggable(id, startX, startY, onPositionChange);

    return(
        <div className="grid-item absolute cursor-pointer hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.8)] transition-transform pointer-events-auto"
        style={{left: startX, top: startY}}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
                <div className="rounded-lg bg-orange-100 border-4 border-neutral-700 sketchy sketchy-none">
                    <div className="p-4 h-max-full w-max-full text-center">{children}
                        </div>
                    </div>
                </div> 
    )
}