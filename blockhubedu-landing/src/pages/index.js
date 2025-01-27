import GridGame from "../components/gridmaster/gridgame";
import GridItem from "../components/gridmaster/griditem";
import GridChain from "../components/gridmaster/gridchain";

export default function Home() {
        return(
        <div>
            <div className="relative h-screen overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-scroll bg-top flex flex-col justify-center items-center" style={{ backgroundImage: "url('/assets/Background.png')" }}>
                        <GridChain>
                        <GridGame>
                            <GridItem id="item-1" startX={500} startY={200}>
                                <p className=" text-gray-800 text-3xl mb-4">Welcome to</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">BlockHub</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">Studio</p>
                            </GridItem> 
                        </GridGame>
                        <GridGame>
                            <GridItem id="item-2" startX={500} startY={200}>
                                <p className=" text-gray-800 text-3xl mb-4">Welcome to</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">BlockHub</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">Studio</p>
                            </GridItem> 
                            <GridItem id="item-3" startX={0} startY={-400}>
                                <p className=" text-gray-800 text-3xl mb-4">Welcome to</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">BlockHub</p>
                                <p className=" text-gray-800 text-5xl font-[cabinSketch] font-bold mb-2 tracking-widest">Studio</p>
                            </GridItem> 

                        </GridGame>
                        </GridChain>
                </div>
            </div>
        </div>
    )
}