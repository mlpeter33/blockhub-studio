import React from 'react';
import react,{useState} from 'react';

export default function GridItem() {
    const [position, setPosition] = useState({x: 0, y: 0});

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
        <div className="grid-item absolute"
        style={{left: position.x, top: position.y}}
        draggable="true"
        onDragStart={handleDragStart}>
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 text-center">
                    <p className=" text-gray-800 text-4xl mb-4">Welcome to</p>
                        <p className=" text-gray-800 text-7xl font-[cabinSketch] font-bold mb-2 tracking-widest">BlockHub</p>
                        <p className=" text-gray-800 text-7xl font-[cabinSketch] font-bold mb-2 tracking-widest">Studio</p>
                        </div>
                    </div>
                </div> 
            </div>
    )
}