import '../styles/globals.css';
import GridGame from "../components/grid-master/grid-game";
import GridDragItem from "../components/grid-master/grid-drag-item";
import GridChain from "../components/grid-master/grid-chain";
import DragArea from "../components/grid-master/drag-area";
import Header from "../components/header";
import useGridPositions from "../hooks/useGridPositions";
import Projects from "../sections/projects";

export default function Home() {
    const { positions, handlePositionChange, handleDropItem } = useGridPositions();
        return(
        <div>
            <Header /> 
            <div className="relative w-screen h-screen overflow-hidden"> 
                <div className="absolute top-0 left-0 w-full h-full bg-cover bg-top flex flex-col bg-orange-100"> 
                 <div className="justify-center items-center">
                <GridChain>
                        <GridGame id="grid-container">
                            <DragArea onDropItem={handleDropItem}>
                            <GridDragItem id="item1" startX={positions.item1.x} startY={positions.item1.y} onPositionChange={handlePositionChange}>
                                <p className=" text-neutral-700  text-3xl font-shadowsLight2 mb-4">Welcome to</p>
                                <p className=" text-neutral-700 text-9xl font-cabinSketch mb-2 tracking-widest">BlockHub</p>
                                <p className=" text-neutral-700 text-9xl font-cabinSketch mb-2 tracking-widest">Studio</p>
                            </GridDragItem> 
                            </DragArea>
                        </GridGame>
                        <Projects />
                </GridChain>
                    </div>
                </div>
            </div>
        </div>
    )
} 