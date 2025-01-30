import '../styles/globals.css';
import GridGame from "../components/grid-master/grid-game";
import GridDragItem from "../components/grid-master/grid-drag-item";
import GridChain from "../components/grid-master/grid-chain";
import DragArea from "../components/grid-master/drag-area";
import Header from "../components/header";
import { useState, useEffect } from "react";

export default function Home() {

    const [positions, setPositions] = useState({
        item1: { x: 350, y: 100 },
        item2: { x: 850, y: 200 },
        item3: { x: 250, y: 200 },
    });

    //const [gridSize, setGridSize] = useState({ width: 0, height: 0 });

    //useEffect(() => {
    //    const grid = document.getElementById("grid-container"); 
    //    if (grid) {
    //      setGridSize({
    //        width: grid.clientWidth,
    //        height: grid.clientHeight
    //      });
    //    }
    //  }, []);

    const handlePositionChange = (id: string, x: number, y: number) => {
        setPositions((prev)=>({
            ...prev,
            [id]: { x, y },
         //       x: Math.max(0, Math.min(x, gridSize.width - 100)), 
         //       y: Math.max(0, Math.min(y, gridSize.height - 100)), 
        // },
        })); 
    };
        
    const handleDropItem = (id: string, x: number, y: number) => {
        handlePositionChange(id, x, y);
    };
        return(
        <div>
            <div className="relative w-screen h-screen overflow-hidden"> 
                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-top flex flex-col bg-orange-100"> 
                <Header></Header> 
                 <div className="justify-center items-center">
                <GridChain>
                        <GridGame id="grid-container">
                            <DragArea onDropItem={handleDropItem}>
                            <GridDragItem id="item1" startX={positions.item1.x} startY={positions.item1.y} onPositionChange={handlePositionChange}>
                                <p className=" text-gray-800 text-3xl font-shadowsLight2 mb-4">Welcome to</p>
                                <p className=" text-gray-800 text-9xl font-cabinSketch mb-2 tracking-widest">BlockHub</p>
                                <p className=" text-gray-800 text-9xl font-cabinSketch mb-2 tracking-widest">Studio</p>
                            </GridDragItem> 
                            </DragArea>
                        </GridGame>
                        <GridGame id="grid-container">
                            <DragArea onDropItem={handleDropItem}>
                            <GridDragItem id="item2" startX={positions.item2.x} startY={positions.item2.y} onPositionChange={handlePositionChange}>
                                <p className=" text-gray-800 text-3xl font-shadowsLight2 mb-4">lorem ipsum</p>
                                <p className=" text-gray-800 text-5xl font-shadowsLight2 font-bold mb-2 tracking-widest">lorem</p>
                                <p className=" text-gray-800 text-5xl font-shadowsLight2 font-bold mb-2 tracking-widest">ipsum</p>
                            </GridDragItem> 
                            <GridDragItem id="item3" startX={positions.item3.x} startY={positions.item3.y} onPositionChange={handlePositionChange}>
                                <p className=" text-gray-800 text-3xl font-shadowsLight2 mb-4">lorem ipsum</p>
                                <p className=" text-gray-800 text-5xl font-shadowsLight2 font-bold mb-2 tracking-widest">lorem</p>
                                <p className=" text-gray-800 text-5xl font-shadowsLight2 font-bold mb-2 tracking-widest">ipsum</p>
                            </GridDragItem> 
                            </DragArea>
                        </GridGame>
                        </GridChain>
                        </div>
                </div>
            </div>
        </div>
    )
} 