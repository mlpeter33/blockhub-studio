import GridItem from "./griditem";

export default function GridGame() {

    return(
        //<div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-3 lg:grid-cols-5 lg:grid-rows-5 gap-4 w-screen h-screen" style={{outline: "none"}}>
            <GridItem startX={450} startY={200}>
                <p className=" text-gray-800 text-4xl mb-4">Welcome to</p>
                <p className=" text-gray-800 text-7xl font-[cabinSketch] font-bold mb-2 tracking-widest">BlockHub</p>
                <p className=" text-gray-800 text-7xl font-[cabinSketch] font-bold mb-2 tracking-widest">Studio</p>
                </GridItem> 
            </div>
         //</div>
        )
    }
