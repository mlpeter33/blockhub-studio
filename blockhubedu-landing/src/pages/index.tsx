import GridGame from "../components/grid-master/grid-game";
import GridDragItem from "../components/grid-master/grid-drag-item";
import GridChain from "../components/grid-master/grid-chain";
import DragArea from "../components/grid-master/drag-area";
import Header from "../components/header";
import { useState } from "react";

export default function Home() {

    const [positions, setPositions] = useState({
        item1: { x: 550, y: 200 },
        item2: { x: 850, y: 200 },
        item3: { x: 250, y: 200 },
    });

    const handlePositionChange = (id: string, x: number, y: number) => {
        setPositions((prev)=>({
            ...prev,
            [id]: {x, y},
        })); 
    };
        
    const handleDropItem = (id: string, x: number, y: number) => {
        handlePositionChange(id, x, y);
    };
        return(
        <div>
            <Header></Header>
            <div className="relative w-screen h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-scroll bg-top flex flex-col justify-center items-center" style={{ backgroundImage: "url('/assets/Background.png')" }}>
                        <GridChain>
                        <GridGame>
                            <DragArea onDropItem={handleDropItem}>
                            <GridDragItem id="item1" startX={positions.item1.x} startY={positions.item1.y} onPositionChange={handlePositionChange}>
                                <p className=" text-gray-800 text-3xl mb-4">Welcome to</p>
                                <p className=" text-gray-800 text-5xl font-[londrinaSketch] font-bold mb-2 tracking-widest">BlockHub</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">Studio</p>
                            </GridDragItem> 
                            </DragArea>
                        </GridGame>
                        <GridGame>
                            <DragArea onDropItem={handleDropItem}>
                            <GridDragItem id="item2" startX={positions.item2.x} startY={positions.item2.y} onPositionChange={handlePositionChange}>
                                <p className=" text-gray-800 text-3xl mb-4">Welcome to</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">BlockHub</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">Studio</p>
                            </GridDragItem> 
                            <GridDragItem id="item3" startX={positions.item3.x} startY={positions.item3.y} onPositionChange={handlePositionChange}>
                                <p className=" text-gray-800 text-3xl mb-4">Welcome to</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">BlockHub</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">Studio</p>
                            </GridDragItem> 
                            </DragArea>
                        </GridGame>
                        </GridChain>
                </div>
            </div>
        </div>
    )
} 