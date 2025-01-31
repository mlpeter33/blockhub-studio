import React, {ReactNode} from 'react';
import { useDraggable } from '@/hooks/useDraggable';

type ForumItemProps = {  
    children: ReactNode;
    startX: number;
    startY: number;
    id: string;
    onPositionChange: (id: string, x: number, y: number) => void;
  };  

  export default function ForumItem({children, startX, startY, id, onPositionChange}: ForumItemProps) {

    const { position, handleDragStart, handleDragEnd } = useDraggable(id, startX, startY, onPositionChange);

    return(
        <div className="grid-item absolute cursor-pointer rounded-2xl hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,0,0,0.8)] transition-transform pointer-events-auto"
        style={{left: startX, top: startY}}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
                <div className="rounded-lg h-40 w-52 bg-[url(/assets/forumBg.webp)] bg-[length:100%_100%] bg-center bg-no-repeat">
                    <div className="p-8 px-3 text-right">{children}
                        </div>
                    </div>
                </div> 
    )
}