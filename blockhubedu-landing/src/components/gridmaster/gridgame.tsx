import GridItem from "./griditem";

export default function GridGame() {

    return(
        //<div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-3 sm:grid-rows-3 lg:grid-cols-5 lg:grid-rows-5 gap-4 w-screen h-screen" style={{outline: "none"}}>
            <GridItem />
            </div>
         //</div>
        )
    }
